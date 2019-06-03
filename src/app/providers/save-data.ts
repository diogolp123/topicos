import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RegisterModel } from '../interfaces/register-model';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class SaveDataProvider {

    constructor(public storage: Storage) {
    }

    saveLocalData(register: RegisterModel) {

        this.storage.get('registrations').then(data => {

            if (data == null) {

                const values: any[] = [];
                values.push(register);
                this.storage.set('registrations', values);
            } else {

                data.push(register);
                this.storage.set('registrations', data);
            }
        });
    }

    recoverLocalData(): Promise<any> {
        return this.storage.get('registrations');
    }
}
