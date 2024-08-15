import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiAccessRequestService} from "./services/api-access-request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tikerama-front';
  accessRequestForm?: FormGroup;
  isLoading = false;
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private apiAccessRequestService: ApiAccessRequestService
  ) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.accessRequestForm = this.fb.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      entreprise: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.accessRequestForm?.valid && !this.isLoading) {
      this.isLoading = true;
      this.submitSuccess = false;

      this.apiAccessRequestService.submitAccessRequest(this.accessRequestForm.value)
        .subscribe(
          response => {
            console.log('Demande soumise avec succès', response);
            this.submitSuccess = true;
            this.resetForm();
          },
          error => {
            console.error('Erreur lors de la soumission de la demande', error);
          }
        ).add(() => {
        this.isLoading = false;
      });
    }
  }

  resetForm(): void {
    this.accessRequestForm?.reset();
    this.initForm();
  }
}
