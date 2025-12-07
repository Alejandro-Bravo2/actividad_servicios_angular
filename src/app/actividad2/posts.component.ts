import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  template: `<h3>Posts</h3> <ul> <li *ngFor="let post of posts">{{ post.title }}</li> </ul>`
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => this.posts = data);
  }
}
