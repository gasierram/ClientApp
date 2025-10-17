import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../core/services/api/user.service';
import { User } from '../../../../core/models/user.model';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{

  users = signal<User[]>([]);

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
}
