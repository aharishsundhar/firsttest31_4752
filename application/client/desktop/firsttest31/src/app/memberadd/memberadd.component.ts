import { Component, OnInit } from '@angular/core';
import { MemberaddService } from './memberadd.service';

@Component({
  selector: 'app-memberadd',
  templateUrl: './memberadd.component.html',
  styleUrls: ['./memberadd.component.scss'],
})

export class MemberaddComponent implements OnInit {
    public member = {
        name: '',
    }

    constructor (
        private memberaddService: MemberaddService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.memberaddService.GpCreate(this.member).subscribe(data => {
            this.member.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}