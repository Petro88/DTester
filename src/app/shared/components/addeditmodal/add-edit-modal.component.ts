import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'add-edit-modal',
    templateUrl: 'add-edit-modal.component.html',
    styleUrls: ['add-edit-modal.component.css']
})
export class AddEditModalComponent implements OnInit {

    public data: any;

    @Input() name: string;
    @Input() description: string;
    @Input() email: string;
    @Input() code: string;
    @Input() id: number;
    @Input() config: any;
    @Output() activate = new EventEmitter();

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
        this.data = Object.assign({}, this.config);
        this.buildMyForm();
    }

    run(action: string) {
        this.activate.emit(this.data);
        this.data.list.forEach(item=>item.value = "");
    }

    open(content) {
        if (this.id) this.data.id = this.id;

        this.data.list.forEach((item)=> {
            if (item.title === "name") {
                item.value = this.name;
                item.type = this.type[0];
                item.pattern = "[А-ЯA-Z]{1}([а-яa-z]|\s|-)+";
            }
            if (item.title === "description") {
                item.value = this.description;
                item.type = this.type[0];
                item.pattern = "[А-Я]{1}([а-я]|\s|-)+";
            }
            if (item.title === "email") {
                item.value = this.email;
                item.type = this.type[1];
            }
            if (item.title === "code") {
                item.value = this.code;
                item.type = this.type[2];
            }
        });
        this.modalService.open(content);
    }

    //variables for validation
    modalForm: FormGroup;
    public type: string[] = ["text", "email", "password", "url"];

    buildMyForm(): void {
        this.modalForm = new FormGroup({
            'name': new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(24),
                Validators.pattern("[А-ЯA-Z]{1}([а-яa-z]|\s|-)+")
            ]),
            'description': new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(120),
                Validators.pattern("[А-Я]{1}([а-я]|\s|-)+")
            ]),
            'email': new FormControl('', [
                Validators.required
            ]),
            'password': new FormControl('', [
                Validators.required
            ])
        });
        this.modalForm.valueChanges
            .subscribe(data => {
                this.onValueChanged(data);
            });
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.modalForm) {
            return;
        }
        const form = this.modalForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'name': '',
        'description': '',
        'password': ''
    };

    validationMessages = {
        'name': {
            'required': "Ім'я є обов'язкове",
            'minlength': "Ім'я повинно містити не менше 3 символів",
            'maxlength': "Ім'я не повинно містити більше ніж 24 символи",
            'pattern': "Ім'я повинно починатися з великої букви. Дозволено вводити літери,пробіли, цифри або тире"
        },
        'description': {
            'required': 'Опис є обовязковим',
            'minlength': "Опис повинен містити не менше 6 символів",
            'maxlength': "Максимальне дозволене число символів 120",
            'pattern': "Опис повинен починатися з великої букви. Дозволено вводити літери,пробіли, цифри або тире"
        },
        'password': {
            'required': "Ім'я є обов'язкове",
        }
    };

}