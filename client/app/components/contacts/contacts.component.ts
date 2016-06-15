import {Component} from "angular2/core";
@Component({
    selector: 'contacts_component',
    template: `
        <div class='contacts'>
        <div class="row">
            <div class="col-sm-4"><div class='price_detail'></div></div>
            <div class="col-sm-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.119233339485!2d27.45864260516664!3d53.89408466211655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdac6228bdbef%3A0xf66c885e8f52d4e6!2zMi3QuSDQv9C10YAuINCi0LjQvNC-0YjQtdC90LrQviAzLCDQnNC40L3RgdC6LCDQkdC10LvQsNGA0YPRgdGM!5e0!3m2!1sru!2sru!4v1461783880443" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div> 
        </div>
    `
})
export class ContactsComponent{}