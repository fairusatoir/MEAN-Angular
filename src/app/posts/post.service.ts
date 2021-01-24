import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "./post.model";

@Injectable
({
  providedIn: 'root'
})
export class PostService{
  private posts: Post[]=[];
  private postsUpdated = new Subject<Post[]>() ;

  getPost(){
    return this.posts;
  }

  addPost(title:string, content:string){
    const post: Post={title: title, content: content};
    this.posts.push(post);
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }
}
