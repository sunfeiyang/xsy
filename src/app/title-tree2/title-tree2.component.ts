import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


/**
 * 嵌套结构的文件节点数据。
 * 每个节点都有一个文件名，以及一个类型或子节点列表。
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
  url: string;
}

/** 具有可扩展和级别信息的平面节点 */
export class FileFlatNode {
  constructor(
    public expandable: boolean, public filename: string, public level: number, public type: any, public url: string) {}
}

/**
 * 字符串中的文件结构树数据。数据可以被解析为Json对象
 */
const TREE_DATA = JSON.stringify({
  '成语词典_idiom': {

  }, '唐诗宋词_poem': {

  }, '歇后语_allegorical': {

  }, '名人名言_famous': {

  }, '历史上的今天_today-history': {

  }, '字典_dic': {

  }, '影视资讯_movie': {
    '正在热饮': '',
    '即将上映': '',
    '欧美排行榜': ''
  }
  //   material2: {
  //     src: {
  //       button: 'ts',
  //       checkbox: 'ts',
  //       input: 'ts'
  //     }
  //   }
  // },
  // Downloads: {
  //   October: 'pdf',
  //   November: 'pdf',
  //   Tutorial: 'html'
  // },
  // Pictures: {
  //   'Photo Booth Library': {
  //     Contents: 'dir',
  //     Pictures: 'dir'
  //   },
  //   Sun: 'png',
  //   Woods: 'jpg'
  // }
});

/**
 * 文件数据库，它可以从字符串构建树结构Json对象。
 * Json对象中的每个节点表示一个文件或目录。对于文件，它具有文件名和类型。
 * 对于目录，它有文件名和子目录(文件或目录的列表)。
 * 输入将是一个json对象字符串，输出是一个具有嵌套结构的“FileNode”列表。
 */
@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // 将字符串解析为json对象。
    const dataObject = JSON.parse(TREE_DATA);

    // 从Json对象构建树节点。结果是一个嵌套的“FileNode”列表
    //     文件节点作为子节点。
    const data = this.buildFileTree(dataObject, 0, '000000000000');

    // 通知更改
    this.dataChange.next(data);
  }

  /**
   * 构建文件结构树。“值”是Json对象，或Json对象的子树。
   * 返回值是“FileNode”的列表。
   */
  buildFileTree(obj: object, level: number, url: string): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      // 获得json串中的内容
      const value = obj[key];
      // 定义最终返回数据
      const node = new FileNode();
      // 给filename 赋值为节点名称
      node.filename = key.split('_')[0];
      // 修改后的节点名称 名称_对应的url 获取到url地址后赋值给最后返回的对象中
      const url_c = key.split('_')[1];
      // 定义url
      if (url_c != null) {
        node.url = url_c;
      }

      // 定义子节点
      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1, url_c);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}


/**
 * 带有平面节点的标题树
 */
@Component({
  selector: 'app-title-tree2',
  templateUrl: './title-tree2.component.html',
  styleUrls: ['./title-tree2.component.css'],
  providers: [FileDatabase]
})
export class TitleTree2Component {
  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  constructor(database: FileDatabase, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => this.dataSource.data = data);

    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('/node_modules/material-design-icons/image/svg/design/ic_add_a_photo_48px.svg'));
  }

  // 定义最终页面展示的标题树
  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type, node.url);
  }

  private _getLevel = (node: FileFlatNode) => node.level;

  private _isExpandable = (node: FileFlatNode) => node.expandable;

  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

}
