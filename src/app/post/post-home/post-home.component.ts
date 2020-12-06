import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css'],
})
export class PostHomeComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSubscription: Subscription;
  constructor(public postService: PostService) {}
  ngOnInit(): void {
    this.postService.getPost();
    this.postsSubscription = this.postService
      .getListaDePostsAtualizadaObservable()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }
}
