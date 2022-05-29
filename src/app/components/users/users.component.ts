import { Component, OnInit } from '@angular/core';
import { UsersJsonService } from 'src/app/Services/user.service';
import { Dictionary } from './Models/dictionary.model';
import { UserNode } from './Models/node.model';
import { UserTree } from './Models/User-tree.model';
import { User } from './Models/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private UsersJsonService: UsersJsonService) {
  }
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.UsersJsonService.getAll().subscribe(res => {
      this.users = res
      this.buildUsersTree()
    })
  }
  buildUsersTree(){
    this.buildUserNodeLookup(this.users)
    this.userTree.Root = this.buildTree()
    this.userNodes.push(this.userTree.Root)
  }
  private buildUserNodeLookup(users: User[])
  {
    users.forEach(user => {
      var userher = user.code.split('.')
      let code: string = userher[userher.length - 1]
      this.userNodeLookup[code] = new UserNode(user)
    });
  }
  private buildTree(): UserNode { 
    Object.entries(this.userNodeLookup).forEach(
      ([key, node]) => {
        let nodeHierarchy = node?.User.code.split('.');
        let userCode = nodeHierarchy[nodeHierarchy.length - 1];
        let parentcode = nodeHierarchy[nodeHierarchy.length - 2]
        if (parentcode) {
          let parentNode = this.userNodeLookup[parentcode]
          if (parentNode) {
            node.Parent = parentNode;
            parentNode.Children.push(node)
          }
        }
        node.User.Id = userCode
      }
    );
    return Object.entries(this.userNodeLookup).filter(x => x[1].Parent == null)[0][1]
  }
  userTree: UserTree = new UserTree()
  users: User[] = []
  userNodeLookup: Dictionary<UserNode> = {};
  userNodes:UserNode[]  = []
}
