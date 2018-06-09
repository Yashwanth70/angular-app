import { Component, OnInit } from '@angular/core';
import { Posts,PostComments } from '../allPosts';
import { PostsFetchService } from '../posts-fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postDetails : any ;
  postComments : [];
  constructor(private postsService: PostsFetchService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
   const id = +this.route.snapshot.paramMap.get('id')
  this.postsService.getPostDetails(id)
  		.subscribe(post => this.postDetails = post);
  this.postsService.getPostComments(id)
  		.subscribe(postComments => this.postComments = postComments);
  }

}
