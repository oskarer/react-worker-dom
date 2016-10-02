import TreeNode from './TreeNode';
import {DOM_OPS as _} from './../../common/constants';
import {COMMENT_NODE} from './../../common/nodeType'

export default class Comment extends TreeNode {
    constructor(val) {
        super();
        this.nodeType = COMMENT_NODE;
        this.comment = val;
        this._bridge.send(_.createComment, this._guid, [val]);
    }
}