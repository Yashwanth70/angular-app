import { Component, OnInit } from '@angular/core';
import { Posts } from '../allPosts';
import { PostsFetchService } from '../posts-fetch.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts = [];

  onSelect(post: Posts): void {
	console.log(post.id);
	window.location.href = '/posts/'+post.id;
	}

  constructor(private postsService: PostsFetchService) { }

  ngOnInit() {
  	this.postsService.getPosts()
  		.subscribe(posts => this.allPosts = posts);
  }

}
