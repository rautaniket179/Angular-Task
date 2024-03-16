import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (response) => {
          this.posts = response;
        },
        (error) => {
          console.error('Error fetching posts:', error);
          this.errorMessage = 'Error fetching posts. Please try again later.';
        }
      );
  }
}
