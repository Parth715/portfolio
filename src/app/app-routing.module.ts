import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {path: "", redirectTo: "/project", pathMatch: "full"},
  {path: "project", component: ProjectsComponent},
  {path: "about-me", component: AboutMeComponent},
  {path: "education", component: EducationComponent},
  {path: "work-experience", component: WorkExperienceComponent},
  {path: "interests", component: InterestsComponent},
  {path: "resume", component: ResumeComponent},
  {path: "**", component: ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
