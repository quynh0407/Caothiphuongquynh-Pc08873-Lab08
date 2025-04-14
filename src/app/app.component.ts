import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CloudiryService } from './service/common/cloudiry.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab08';
  imageUrl: string = ''

  constructor(
    private cloudinary: CloudiryService
  ){}

  onFileSected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.imageUrl = res.secure_url;
        console.log('Uploaded:', this.imageUrl);
      });
    }
  }
}
