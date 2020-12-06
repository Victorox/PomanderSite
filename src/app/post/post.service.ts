import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  private listaPostsAtualizada = new Subject<Post[]>();
  constructor(private httpClient: HttpClient) {}
  getPost(): void {
    this.httpClient
      .get<{ mensagem: string; post: Post[] }>(
        'http://localhost:4200/api/posts'
      )
      .subscribe((dados) => {
        this.posts = dados.post;
        this.listaPostsAtualizada.next([...this.posts]);
      });
  }
  getListaDePostsAtualizadaObservable() {
    return this.listaPostsAtualizada.asObservable();
  }
  adicionarPost(titulo: string, data: string, imagem: string, texto: string) {
    const post: Post = {
      titulo: titulo,
      data: data,
      imagem: imagem,
      texto: texto,
    };
    this.posts.push(post);
    this.listaPostsAtualizada.next([...this.posts]);
  }
}
