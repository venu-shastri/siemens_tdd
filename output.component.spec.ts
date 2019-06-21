import {TestBed,ComponentFixture} from '@angular/core/testing'
import { OutputComponent } from './output.component';

describe("outut-Component Test",()=>{

    //Initialize Module
    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ OutputComponent ]
        });
    });

    let fixture:ComponentFixture<OutputComponent>;
    let componentInstance:OutputComponent;

    //Get Compomnent Fixture
    fixture=TestBed.createComponent(OutputComponent);
    //Get Component Instance From Fixture
    componentInstance=fixture.componentInstance;
    //Get RootElement For DOM Access
    let templateElementRoot=fixture.nativeElement;

    it("Input Property msg test",()=>{
            componentInstance.msg="hello";
            fixture.detectChanges();
            fixture.whenStable().then(()=>{

            let outputElementInnerText=templateElementRoot.
                                        querySelector("output").innerText;            
            expect(outputElementInnerText).toBe("hello");
            });
    });

})