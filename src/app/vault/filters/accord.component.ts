import { Component, Input } from "@angular/core";

@Component({
  selector: "app-vault-filter-accord",
  template: `
    <cdk-accordion class="tw-mb-4 tw-block">
      <cdk-accordion-item #accordionItem="cdkAccordionItem" [expanded]="true">
        <h3>
          <button class="tw-bg-transparent tw-border-none tw-p-0" (click)="accordionItem.toggle()">
            <i
              class="bwi"
              title="{{ 'toggleCollapse' | i18n }}"
              [ngClass]="{
                'bwi-angle-right': accordionItem.expanded,
                'bwi-angle-down': !accordionItem.expanded
              }"
            ></i>
          </button>
          <ng-content select="[header]"></ng-content>
        </h3>
        <div [style.display]="accordionItem.expanded ? '' : 'none'">
          <ng-content select="[body]"></ng-content>
        </div>
      </cdk-accordion-item>
    </cdk-accordion>
  `,
})
export class AccordComponent {
  @Input() expanded: boolean;
}
