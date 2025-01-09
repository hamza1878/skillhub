import { Component } from '@angular/core';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-cv',
  standalone: false,
  
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  cvData: any = {
    personalInfo: { firstName: '', lastName: '', email: '', phone: '' },
    professionalSummary: '',
    educationPrinciple: [],
    experiences: [],
    projects: [],
    certifications: [],
    imagePreview: null
  };

  constructor(private cvService: CvService) {}
  color: number = 0; 
  ngOnInit() {
    this.cvService.cvData$.subscribe(data => {
      if (data) {
        console.log('CV Data received:', data);
        this.cvData = {...data};
        
        this.cvData.educationPrinciple = data.educationPrinciple || [];
        this.cvData.experiences = data.experiences || [];
        this.cvData.projects = data.projects || [];
        this.cvData.certifications = data.certifications || [];
      }
    });
    this.cvService.color$.subscribe(color => {
      this.color = color; 
      console.log('Received color:', color);
    });

  }
}

