import { Component } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-post-catalog',
  templateUrl: './post-catalog.component.html',
  styleUrls: ['./post-catalog.component.scss']
})
export class PostCatalogComponent {
  postList: Array<Post> = [];

  constructor(private postsService: PostsService) {

  }

  ngOnInit(): void {
    this.loadPostList();
  }

  loadPostList() {
    this.postsService.getAllPosts().subscribe(data => {
      this.postList = data as Array<Post>;
    });
  }
}
