export interface WebHook {
    /** Id of Ticket, Order etc as the source for callback */
    ID: number;
    /** Connectwise company name: 'oriontech' or 'training' */
    CompanyId: string;
    /** Base Url of source of callback: 'service.oriontech.com' */
    FromUrl: string;
    /** Callback event: added, updated, deleted */
    Action: string;
    /**Type of callback: company, ticket, contact, etc  */
    Type: string;
    /** MemberId of change: portal, etc*/
    MemberId: string;
    /** JSON string of Entity object for callback*/
    Entity: string;
}
export interface AccountingBatch {
    'id'?: number;
    'batchIdentifier': string;
    'exportInvoicesFlag'?: boolean;
    'exportExpensesFlag'?: boolean;
    'exportProductsFlag'?: boolean;
    'closedFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Activity {
    'id'?: number;
    'name': string;
    'type'?: ActivityTypeReference;
    'company'?: CompanyReference;
    'contact'?: ContactReference;
    'phoneNumber'?: string;
    'email'?: string;
    'status'?: ActivityStatusReference;
    'opportunity'?: OpportunityReference;
    'ticket'?: TicketReference;
    'agreement'?: AgreementReference;
    'campaign'?: CampaignReference;
    'notes'?: string;
    'dateStart'?: Date;
    'dateEnd'?: Date;
    'assignedBy'?: MemberReference;
    'assignTo': MemberReference;
    'scheduleStatus'?: ScheduleStatusReference;
    'reminder'?: ReminderReference;
    'where'?: ServiceLocationReference;
    'notifyFlag'?: boolean;
    'mobileGuid'?: Guid;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'customFields'?: Array<CustomFieldValue>;
}
export interface ActivityReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ActivityStatus {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'spawnFollowupFlag'?: boolean;
    'closedFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ActivityStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ActivityStopwatch {
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'activityId': number;
    'activityMobileGuid'?: Guid;
    'agreement'?: AgreementReference;
    'billableOption'?: ActivityStopwatch.BillableOptionEnum;
    'businessUnitId'?: number;
    'dateEntered'?: Date;
    'endTime'?: Date;
    'id'?: number;
    'internalNotes'?: string;
    'locationId'?: number;
    'member': MemberReference;
    'mobileGuid'?: Guid;
    'notes'?: string;
    'startTime'?: Date;
    'status': ActivityStopwatch.StatusEnum;
    'totalPauseTime'?: number;
    'workRole'?: WorkRoleReference;
    'workType'?: WorkTypeReference;
}
export declare namespace ActivityStopwatch {
    type BillableOptionEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type StatusEnum = 'Reset' | 'Running' | 'Paused' | 'Stopped';
}
export interface ActivityType {
    'id'?: number;
    'name': string;
    'points'?: number;
    'defaultFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'emailFlag'?: boolean;
    'memoFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ActivityTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Addition {
    'id'?: number;
    'product': IvItemReference;
    'quantity'?: number;
    'lessIncluded'?: number;
    'unitPrice'?: number;
    'unitCost'?: number;
    'billCustomer': Addition.BillCustomerEnum;
    'effectiveDate'?: Date;
    'cancelledDate'?: Date;
    'taxableFlag'?: boolean;
    'serialNumber'?: string;
    'invoiceDescription'?: string;
    'purchaseItemFlag'?: boolean;
    'specialOrderFlag'?: boolean;
    'agreementId'?: number;
    'description'?: string;
    'billedQuantity'?: number;
    'uom'?: string;
    'extPrice'?: number;
    'extCost'?: number;
    'sequenceNumber'?: number;
    'margin'?: number;
    'prorateCost'?: number;
    'proratePrice'?: number;
    'extendedProrateCost'?: number;
    'extendedProratePrice'?: number;
    'prorateCurrentPeriodFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace Addition {
    type BillCustomerEnum = 'Billable' | 'DoNotBill' | 'NoCharge';
}
export interface Adjustment {
    'id'?: number;
    'amount'?: number;
    'description'?: string;
    'effectiveDate'?: Date;
    'agreementId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'identifier': string;
    'type': AdjustmentTypeReference;
    'reason'?: string;
    'notes'?: string;
    'closedFlag'?: boolean;
    'closedBy'?: string;
    'closedDate'?: Date;
}
export interface AdjustmentDetail {
    'id'?: number;
    'catalogItem': CatalogItemReference;
    'description'?: string;
    'quantityOnHand'?: number;
    'unitCost'?: number;
    'warehouse': WarehouseReference;
    'warehouseBin': WarehouseBinReference;
    'quantityAdjusted': number;
    'serialNumber'?: string;
    'adjustment'?: AdjustmentReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AdjustmentReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AdjustmentType {
    'id'?: number;
    'identifier': string;
    'name'?: string;
    'auditTrailFlag'?: boolean;
    'dateCreated'?: Date;
    'createdBy'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AdjustmentTypeReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Agreement {
    'id'?: number;
    'name': string;
    'type': AgreementTypeReference;
    'company': CompanyReference;
    'contact': ContactReference;
    'subContractCompany'?: CompanyReference;
    'subContractContact'?: ContactReference;
    'parentAgreementId'?: number;
    'customerPO'?: string;
    'locationId'?: number;
    'businessUnitId'?: number;
    'restrictLocationFlag'?: boolean;
    'restrictDepartmentFlag'?: boolean;
    'startDate'?: Date;
    'endDate'?: Date;
    'noEndingDateFlag'?: boolean;
    'opportunity'?: OpportunityReference;
    'cancelledFlag'?: boolean;
    'dateCancelled'?: Date;
    'reasonCancelled'?: string;
    'slaId'?: number;
    'workOrder'?: string;
    'internalNotes'?: string;
    'applicationUnits'?: Agreement.ApplicationUnitsEnum;
    'applicationLimit'?: number;
    'applicationCycle'?: Agreement.ApplicationCycleEnum;
    'applicationUnlimitedFlag'?: boolean;
    'oneTimeFlag'?: boolean;
    'coverAgreementTime'?: boolean;
    'coverAgreementProduct'?: boolean;
    'coverAgreementExpense'?: boolean;
    'coverSalesTax'?: boolean;
    'carryOverUnused'?: boolean;
    'allowOverruns'?: boolean;
    'expiredDays'?: number;
    'limit'?: number;
    'expireWhenZero'?: boolean;
    'chargeToFirm'?: boolean;
    'employeeCompRate'?: Agreement.EmployeeCompRateEnum;
    'employeeCompNotExceed'?: Agreement.EmployeeCompNotExceedEnum;
    'compHourlyRate'?: number;
    'compLimitAmount'?: number;
    'billCycleId'?: number;
    'billOneTimeFlag'?: boolean;
    'billTermsId'?: number;
    'invoicingCycle'?: Agreement.InvoicingCycleEnum;
    'billToCompany'?: CompanyReference;
    'billToSite'?: SiteReference;
    'billAmount'?: number;
    'taxable'?: boolean;
    'prorateFirstBill'?: number;
    'billStartDate'?: Date;
    'taxCodeId'?: number;
    'restrictDownPayment'?: boolean;
    'prorateFlag'?: boolean;
    'invoiceDescription'?: string;
    'topComment'?: boolean;
    'bottomComment'?: boolean;
    'workRole'?: WorkRoleReference;
    'workType'?: WorkTypeReference;
    'projectTypeId'?: number;
    'invoiceTemplateSetupId'?: number;
    'billTime'?: Agreement.BillTimeEnum;
    'billExpenses'?: Agreement.BillExpensesEnum;
    'billProducts'?: Agreement.BillProductsEnum;
    'billableTimeInvoice'?: boolean;
    'billableExpenseInvoice'?: boolean;
    'billableProductInvoice'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'periodType'?: Agreement.PeriodTypeEnum;
}
export declare namespace Agreement {
    type ApplicationUnitsEnum = 'Amount' | 'Hours' | 'Incidents';
    type ApplicationCycleEnum = 'Contract2Weeks' | 'Contract4Weeks' | 'ContractYear' | 'CalendarMonth' | 'CalendarQuarter' | 'CalendarWeek' | 'ContractQuarter' | 'CalendarYear';
    type EmployeeCompRateEnum = 'Actual' | 'Hourly';
    type EmployeeCompNotExceedEnum = 'Billing' | 'Percent' | 'Amount';
    type InvoicingCycleEnum = 'CalendarYear' | 'ContractYear';
    type BillTimeEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillExpensesEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillProductsEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type PeriodTypeEnum = 'Current' | 'Future' | 'Both' | 'Undefined';
}
export interface AgreementReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AgreementSite {
    'id'?: number;
    'company': CompanyReference;
    'site'?: SiteReference;
    'agreementId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AgreementType {
    'id'?: number;
    'name': string;
    'prefixSuffixOption': AgreementType.PrefixSuffixOptionEnum;
    'defaultFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'prePaymentFlag'?: boolean;
    'invoicePreSuffix'?: string;
    'locationId'?: number;
    'businessUnitId'?: number;
    'restrictLocationFlag'?: boolean;
    'restrictDepartmentFlag'?: boolean;
    'slaId'?: number;
    'applicationUnits'?: AgreementType.ApplicationUnitsEnum;
    'applicationLimit'?: number;
    'applicationCycle'?: AgreementType.ApplicationCycleEnum;
    'applicationUnlimitedFlag'?: boolean;
    'oneTimeFlag'?: boolean;
    'coverAgreementTimeFlag'?: boolean;
    'coverAgreementProductFlag'?: boolean;
    'coverAgreementExpenseFlag'?: boolean;
    'coverSalesTaxFlag'?: boolean;
    'carryOverUnusedFlag'?: boolean;
    'allowOverrunsFlag'?: boolean;
    'expiredDays'?: number;
    'limit'?: number;
    'expireWhenZero'?: boolean;
    'chargeToFirmFlag'?: boolean;
    'employeeCompRate': AgreementType.EmployeeCompRateEnum;
    'employeeCompNotExceed': AgreementType.EmployeeCompNotExceedEnum;
    'compHourlyRate'?: number;
    'compLimitAmount'?: number;
    'billCycleId'?: number;
    'billOneTimeFlag'?: boolean;
    'billTermsId'?: number;
    'invoicingCycle': AgreementType.InvoicingCycleEnum;
    'billAmount'?: number;
    'taxableFlag'?: boolean;
    'restrictDownPaymentFlag'?: boolean;
    'invoiceDescription'?: string;
    'topCommentFlag'?: boolean;
    'bottomCommentFlag'?: boolean;
    'workRole'?: WorkRoleReference;
    'workType'?: WorkTypeReference;
    'projectTypeId'?: number;
    'invoiceTemplateSetupId'?: number;
    'billTime': AgreementType.BillTimeEnum;
    'billExpenses': AgreementType.BillExpensesEnum;
    'billProducts': AgreementType.BillProductsEnum;
    'billableTimeInvoiceFlag'?: boolean;
    'billableExpenseInvoiceFlag'?: boolean;
    'billableProductInvoiceFlag'?: boolean;
    'copyWorkRolesFlag'?: boolean;
    'copyWorkTypesFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace AgreementType {
    type PrefixSuffixOptionEnum = 'Prefix' | 'Suffix';
    type ApplicationUnitsEnum = 'Amount' | 'Hours' | 'Incidents';
    type ApplicationCycleEnum = 'Contract2Weeks' | 'Contract4Weeks' | 'ContractYear' | 'CalendarMonth' | 'CalendarQuarter' | 'CalendarWeek' | 'ContractQuarter' | 'CalendarYear';
    type EmployeeCompRateEnum = 'Actual' | 'Hourly';
    type EmployeeCompNotExceedEnum = 'Billing' | 'Percent' | 'Amount';
    type InvoicingCycleEnum = 'CalendarYear' | 'ContractYear';
    type BillTimeEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillExpensesEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillProductsEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
}
export interface AgreementTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AgreementWorkRole {
    'id'?: number;
    'workRole'?: WorkRoleReference;
    'locationId'?: number;
    'rateType': AgreementWorkRole.RateTypeEnum;
    'rate'?: number;
    'limitTo'?: number;
    'effectiveDate'?: Date;
    'endingDate'?: Date;
    'agreementId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace AgreementWorkRole {
    type RateTypeEnum = 'AdjAmount' | 'Custom' | 'Multiplier';
}
export interface AgreementWorkRoleExclusion {
    'id'?: number;
    'workRole': WorkRoleReference;
    'agreementId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AgreementWorkType {
    'id'?: number;
    'workType'?: WorkTypeReference;
    'locationId'?: number;
    'rateType': AgreementWorkType.RateTypeEnum;
    'billTime': AgreementWorkType.BillTimeEnum;
    'rate'?: number;
    'hoursMax'?: number;
    'hoursMin'?: number;
    'roundBillHours'?: number;
    'overageRate'?: number;
    'overageRateType'?: AgreementWorkType.OverageRateTypeEnum;
    'agreementLimit'?: number;
    'site'?: SiteReference;
    'effectiveDate'?: Date;
    'endingDate'?: Date;
    'agreementId'?: number;
    'company'?: CompanyReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace AgreementWorkType {
    type RateTypeEnum = 'AdjAmount' | 'Custom' | 'Multiplier';
    type BillTimeEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type OverageRateTypeEnum = 'AdjAmount' | 'Custom' | 'Multiplier';
}
export interface AgreementWorkTypeExclusion {
    'id'?: number;
    'workType': WorkTypeReference;
    'agreementId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface AuditTrailEntry {
    'text'?: string;
    'enteredDate'?: string;
    'enteredBy'?: string;
    'auditType'?: string;
    'auditSubType'?: string;
    'auditSource'?: string;
}
export interface BatchRequest {
    'id'?: string;
    'requests'?: Array<EndpointRequest>;
    /**
     * Metadata of the entity
     */
    'headers'?: Metadata;
}
export interface BatchResponse {
    'id'?: string;
    'responses'?: Array<EndpointResponse>;
}
export interface BillingDeliveryReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface BillingStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface BillingTermsReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Board {
    'id'?: number;
    'name': string;
    'locationId': number;
    'businessUnitId': number;
    'inactive'?: boolean;
    'signOffTemplate'?: ServiceSignoffReference;
    'sendToContact'?: boolean;
    'contactTemplateId'?: number;
    'sendToResource'?: boolean;
    'resourceTemplateId'?: number;
    'projectFlag'?: boolean;
    /**
     * This field only shows if it is Project Board.
     */
    'showDependenciesFlag'?: boolean;
    /**
     * This field only shows if it is Project Board.
     */
    'showEstimatesFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface BoardDefault {
    'id'?: number;
    'board': BoardReference;
    'serviceType'?: ServiceTypeReference;
    'defaultFlag'?: boolean;
    'agreementId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface BoardReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CalendarReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CallbackEntry {
    'id'?: number;
    'description'?: string;
    'url': string;
    'objectId': number;
    'type': string;
    'level': string;
    'memberId'?: number;
    'inactiveFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Campaign {
    'id'?: number;
    'name': string;
    'type': CampaignTypeReference;
    'subType': CampaignSubTypeReference;
    'status'?: CampaignStatusReference;
    'startDate': Date;
    'endDate'?: Date;
    'locationId'?: number;
    'member'?: MemberReference;
    'inactive'?: boolean;
    'inactiveDaysAfterEnd'?: number;
    'notes'?: string;
    'defaultGroup'?: GroupReference;
    'marketingManagerDefaultTrackId'?: number;
    'opportunityDefaultTrackId'?: number;
    'impressions'?: number;
    'budgetRevenue'?: number;
    'budgetCost'?: number;
    'actualCost'?: number;
    'budgetGrossMargin'?: number;
    'budgetROI'?: number;
    'actualRevenue'?: number;
    'actualGrossMargin'?: number;
    'actualROI'?: number;
    'emailsSent'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CampaignAudit {
    'id'?: number;
    'emailsSent': number;
    'emailsUnsent'?: number;
    'documentsCreated'?: number;
    'emailSubject'?: string;
    'group'?: GroupReference;
    'campaignId'?: number;
    'createdBy'?: string;
    'dateCreated'?: string;
}
export interface CampaignReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CampaignStatus {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    'inactiveFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CampaignStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CampaignSubType {
    'id'?: number;
    'typeId'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CampaignSubTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CampaignType {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CampaignTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CatalogComponent {
    'id'?: number;
    'sequenceNumber'?: number;
    'quantity': number;
    'catalogItem': CatalogItemReference;
    'hidePriceFlag'?: boolean;
    'hideItemIdentifierFlag'?: boolean;
    'hideDescriptionFlag'?: boolean;
    'hideQuantityFlag'?: boolean;
    'parentCatalogItem'?: CatalogItemReference;
    'price'?: number;
    'cost'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CatalogItem {
    'id'?: number;
    'identifier': string;
    'description': string;
    'inactiveFlag'?: boolean;
    'subcategory': ProductSubCategoryReference;
    'type': ProductTypeReference;
    /**
     * Defaults to Non-Inventory
     */
    'productClass'?: CatalogItem.ProductClassEnum;
    'serializedFlag'?: boolean;
    'serializedCostFlag'?: boolean;
    'phaseProductFlag'?: boolean;
    'unitOfMeasure'?: UnitOfMeasureReference;
    'minStockLevel'?: number;
    'price'?: number;
    'cost'?: number;
    'priceAttribute'?: CatalogItem.PriceAttributeEnum;
    'taxableFlag'?: boolean;
    'customerDescription': string;
    'manufacturer'?: ManufacturerReference;
    'manufacturerPartNumber'?: string;
    'vendor'?: CompanyReference;
    'vendorSku'?: string;
    'notes'?: string;
    'integrationXRef'?: string;
    'dateEntered'?: string;
    'category'?: ProductCategoryReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace CatalogItem {
    type ProductClassEnum = 'Agreement' | 'Bundle' | 'Inventory' | 'NonInventory' | 'Service';
    type PriceAttributeEnum = 'FixedFee' | 'NotToExceed' | 'TimeAndMaterials' | 'OverrideRate';
}
export interface CatalogItemReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Category {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    'priceLevelXref'?: string;
    'integrationXref'?: string;
    'locationIds'?: Array<number>;
    'addAllLocations'?: boolean;
    'removeAllLocations'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Certification {
    'id'?: number;
    'name': string;
    'company': CompanyReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ChargeCodeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ClassificationReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Code {
    'id'?: number;
    'name': string;
    'description': string;
    'boardId'?: number;
    'locationId'?: number;
    'businessUnitId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CommunicationTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Company {
    'id'?: number;
    'identifier': string;
    'name': string;
    'status'?: CompanyStatusReference;
    'type'?: CompanyTypeReference;
    /**
     * At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country
     */
    'addressLine1'?: string;
    /**
     * At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country
     */
    'addressLine2'?: string;
    /**
     * At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country
     */
    'city'?: string;
    /**
     * At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country
     */
    'state'?: string;
    /**
     * At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country
     */
    'zip'?: string;
    /**
     * At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country
     */
    'country'?: CountryReference;
    'phoneNumber'?: string;
    'faxNumber'?: string;
    'website'?: string;
    'territoryId'?: number;
    'marketId'?: number;
    'accountNumber'?: string;
    'defaultContact'?: ContactReference;
    'dateAcquired'?: Date;
    'sicCode'?: SicCodeReference;
    'parentCompany'?: CompanyReference;
    'annualRevenue'?: number;
    'numberOfEmployees'?: number;
    'ownershipType'?: OwnershipTypeReference;
    'timeZone'?: TimeZoneReference;
    'leadSource'?: string;
    'leadFlag'?: boolean;
    'unsubscribeFlag'?: boolean;
    'calendarId'?: number;
    'userDefinedField1'?: string;
    'userDefinedField2'?: string;
    'userDefinedField3'?: string;
    'userDefinedField4'?: string;
    'userDefinedField5'?: string;
    'userDefinedField6'?: string;
    'userDefinedField7'?: string;
    'userDefinedField8'?: string;
    'userDefinedField9'?: string;
    'userDefinedField10'?: string;
    'vendorIdentifier'?: string;
    'taxIdentifier'?: string;
    /**
     * New companies will be created with the default tax code unless otherwise specified.
     */
    'taxCode'?: TaxCodeReference;
    'billingTerms'?: BillingTermsReference;
    'invoiceTemplate'?: InvoiceTemplateReference;
    'pricingSchedule'?: PricingScheduleReference;
    /**
     * Based on CompanyEntityType Report
     */
    'companyEntityType'?: EntityTypeReference;
    'billToCompany'?: CompanyReference;
    'billingSite'?: SiteReference;
    'billingContact'?: ContactReference;
    'invoiceDeliveryMethod'?: BillingDeliveryReference;
    'invoiceToEmailAddress'?: string;
    'invoiceCCEmailAddress'?: string;
    'deletedFlag'?: boolean;
    'dateDeleted'?: Date;
    'deletedBy'?: string;
    'mobileGuid'?: Guid;
    'currency'?: CurrencyReference;
    'territoryManager'?: MemberReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'customFields'?: Array<CustomFieldValue>;
}
export interface CompanyCustomNote {
    'id'?: number;
    'customNote': string;
    'status': CompanyStatusReference;
    'company'?: CompanyReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CompanyManagementSummary {
    'id'?: number;
    'managementSolution'?: ManagementSolutionReference;
    'groupIdentifier': string;
    /**
     * deviceType is required if the managementSolution is Legacy
     */
    'deviceType'?: CompanyManagementSummary.DeviceTypeEnum;
    'agreement'?: AgreementReference;
    'snmpMachines'?: number;
    'totalWorkstations'?: number;
    'totalServers'?: number;
    'totalWindowsServers'?: number;
    'totalWindowsWorkstations'?: number;
    'totalManagedMachines'?: number;
    'serversOffline'?: number;
    'serversDiskSpaceLow'?: number;
    'failedBackupJobs'?: number;
    'totalNotifications'?: number;
    'successfulBackupJobs'?: number;
    'serverAvailability'?: number;
    'virusesRemoved'?: number;
    'spywareItemsRemoved'?: number;
    'windowsPatchesInstalled'?: number;
    'diskCleanups'?: number;
    'diskDefragmentations'?: number;
    'fullyPatchedMachines'?: number;
    'missingOneTwoPatchesMachines'?: number;
    'missingThreeFivePatchesMachines'?: number;
    'missingMoreFivePatchesMachines'?: number;
    'missingUnscannedPatchesMachines'?: number;
    'alertsGenerated'?: string;
    'internetConnectivity'?: number;
    'diskSpaceCleanedMb'?: number;
    'missingSecurityPatches'?: string;
    'cpuUtilization'?: number;
    'memoryUtilization'?: number;
    'company'?: CompanyReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace CompanyManagementSummary {
    type DeviceTypeEnum = 'WorkstationsAndServers' | 'BackupStats' | 'Servers' | 'Workstations';
}
export interface CompanyMerge {
    'toCompanyId': number;
    'name'?: CompanyMerge.NameEnum;
    'identifier'?: CompanyMerge.IdentifierEnum;
    'status'?: CompanyMerge.StatusEnum;
    'type'?: CompanyMerge.TypeEnum;
    'primaryAddress'?: CompanyMerge.PrimaryAddressEnum;
    'primaryContact'?: CompanyMerge.PrimaryContactEnum;
    'phone'?: CompanyMerge.PhoneEnum;
    'fax'?: CompanyMerge.FaxEnum;
    'website'?: CompanyMerge.WebsiteEnum;
    'market'?: CompanyMerge.MarketEnum;
    'territory'?: CompanyMerge.TerritoryEnum;
    'revenue'?: CompanyMerge.RevenueEnum;
    'revenueYear'?: CompanyMerge.RevenueYearEnum;
    'numberOfEmployees'?: CompanyMerge.NumberOfEmployeesEnum;
    'sicCode'?: CompanyMerge.SicCodeEnum;
    'dateAcquired'?: CompanyMerge.DateAcquiredEnum;
    'timeZone'?: CompanyMerge.TimeZoneEnum;
    'sourceList'?: CompanyMerge.SourceListEnum;
    'userDefinedField1'?: CompanyMerge.UserDefinedField1Enum;
    'userDefinedField2'?: CompanyMerge.UserDefinedField2Enum;
    'userDefinedField3'?: CompanyMerge.UserDefinedField3Enum;
    'userDefinedField4'?: CompanyMerge.UserDefinedField4Enum;
    'userDefinedField5'?: CompanyMerge.UserDefinedField5Enum;
    'userDefinedField6'?: CompanyMerge.UserDefinedField6Enum;
    'userDefinedField7'?: CompanyMerge.UserDefinedField7Enum;
    'userDefinedField8'?: CompanyMerge.UserDefinedField8Enum;
    'userDefinedField9'?: CompanyMerge.UserDefinedField9Enum;
    'userDefinedField10'?: CompanyMerge.UserDefinedField10Enum;
    'billingAddress'?: CompanyMerge.BillingAddressEnum;
    'billingContact'?: CompanyMerge.BillingContactEnum;
    'taxCode'?: CompanyMerge.TaxCodeEnum;
    'accountNumber'?: CompanyMerge.AccountNumberEnum;
    'billingTerms'?: CompanyMerge.BillingTermsEnum;
    'notes'?: CompanyMerge.NotesEnum;
    'sites'?: CompanyMerge.SitesEnum;
    'activities'?: CompanyMerge.ActivitiesEnum;
    'opportunities'?: CompanyMerge.OpportunitiesEnum;
    'services'?: CompanyMerge.ServicesEnum;
    'projects'?: CompanyMerge.ProjectsEnum;
    'contacts'?: CompanyMerge.ContactsEnum;
    'documents'?: CompanyMerge.DocumentsEnum;
}
export declare namespace CompanyMerge {
    type NameEnum = 'From' | 'To';
    type IdentifierEnum = 'From' | 'To';
    type StatusEnum = 'From' | 'To';
    type TypeEnum = 'From' | 'To';
    type PrimaryAddressEnum = 'From' | 'To';
    type PrimaryContactEnum = 'From' | 'To';
    type PhoneEnum = 'From' | 'To';
    type FaxEnum = 'From' | 'To';
    type WebsiteEnum = 'From' | 'To';
    type MarketEnum = 'From' | 'To';
    type TerritoryEnum = 'From' | 'To';
    type RevenueEnum = 'From' | 'To';
    type RevenueYearEnum = 'From' | 'To';
    type NumberOfEmployeesEnum = 'From' | 'To';
    type SicCodeEnum = 'From' | 'To';
    type DateAcquiredEnum = 'From' | 'To';
    type TimeZoneEnum = 'From' | 'To';
    type SourceListEnum = 'From' | 'To';
    type UserDefinedField1Enum = 'From' | 'To';
    type UserDefinedField2Enum = 'From' | 'To';
    type UserDefinedField3Enum = 'From' | 'To';
    type UserDefinedField4Enum = 'From' | 'To';
    type UserDefinedField5Enum = 'From' | 'To';
    type UserDefinedField6Enum = 'From' | 'To';
    type UserDefinedField7Enum = 'From' | 'To';
    type UserDefinedField8Enum = 'From' | 'To';
    type UserDefinedField9Enum = 'From' | 'To';
    type UserDefinedField10Enum = 'From' | 'To';
    type BillingAddressEnum = 'From' | 'To';
    type BillingContactEnum = 'From' | 'To';
    type TaxCodeEnum = 'From' | 'To';
    type AccountNumberEnum = 'From' | 'To';
    type BillingTermsEnum = 'From' | 'To';
    type NotesEnum = 'Discard' | 'Merge';
    type SitesEnum = 'Discard' | 'Merge';
    type ActivitiesEnum = 'Discard' | 'Merge';
    type OpportunitiesEnum = 'Discard' | 'Merge';
    type ServicesEnum = 'Discard' | 'Merge';
    type ProjectsEnum = 'Discard' | 'Merge';
    type ContactsEnum = 'Discard' | 'Merge';
    type DocumentsEnum = 'Discard' | 'Merge';
}
export interface CompanyNote {
    'id'?: number;
    'text': string;
    'type'?: NoteTypeReference;
    'flagged'?: boolean;
    'enteredBy'?: string;
    'company'?: CompanyReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
/**
 * If chargeToId is not specified, we asume you enter time against the company specified
 */
export interface CompanyReference {
    'id'?: number;
    'identifier'?: string;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CompanySite {
    'id'?: number;
    'name': string;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'city'?: string;
    'state'?: string;
    'zip'?: string;
    'country'?: CountryReference;
    'phoneNumber'?: string;
    'faxNumber'?: string;
    'taxCodeId'?: number;
    'expenseReimbursement'?: number;
    'primaryAddressFlag'?: boolean;
    'defaultShippingFlag'?: boolean;
    'defaultBillingFlag'?: boolean;
    'defaultMailingFlag'?: boolean;
    'calendar'?: CalendarReference;
    'timeZone'?: TimeZoneReference;
    'company'?: CompanyReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CompanyStatus {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'notifyFlag'?: boolean;
    'disallowSavingFlag'?: boolean;
    'notificationMessage'?: string;
    'customNoteFlag'?: boolean;
    'cancelOpenTracksFlag'?: boolean;
    'track'?: TrackReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CompanyStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CompanyTeam {
    'id'?: number;
    'company'?: CompanyReference;
    'teamRole': TeamRoleReference;
    'locationId'?: number;
    'businessUnitId'?: number;
    'contact'?: ContactReference;
    'member'?: MemberReference;
    'accountManagerFlag'?: boolean;
    'techFlag'?: boolean;
    'salesFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CompanyType {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    'vendorFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CompanyTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Configuration {
    'id'?: number;
    'name': string;
    'type': ConfigurationTypeReference;
    'status'?: ConfigurationStatusReference;
    'company': CompanyReference;
    'contact'?: ContactReference;
    'site'?: SiteReference;
    'locationId'?: number;
    'businessUnitId'?: number;
    'deviceIdentifier'?: string;
    'serialNumber'?: string;
    'modelNumber'?: string;
    'tagNumber'?: string;
    'purchaseDate'?: Date;
    'installationDate'?: Date;
    'installedBy'?: MemberReference;
    'warrantyExpirationDate'?: Date;
    'vendorNotes'?: string;
    'notes'?: string;
    'macAddress'?: string;
    'lastLoginName'?: string;
    'billFlag'?: boolean;
    'backupSuccesses'?: number;
    'backupIncomplete'?: number;
    'backupFailed'?: number;
    'backupRestores'?: number;
    'lastBackupDate'?: Date;
    'backupServerName'?: string;
    'backupBillableSpaceGb'?: number;
    'backupProtectedDeviceList'?: string;
    'backupYear'?: number;
    'backupMonth'?: number;
    'ipAddress'?: string;
    'defaultGateway'?: string;
    'osType'?: string;
    'osInfo'?: string;
    'cpuSpeed'?: string;
    'ram'?: string;
    'localHardDrives'?: string;
    'parentConfigurationId'?: number;
    'vendor'?: CompanyReference;
    'manufacturer'?: ManufacturerReference;
    'questions'?: Array<ConfigurationQuestion>;
    'activeFlag'?: boolean;
    'managementLink'?: string;
    'remoteLink'?: string;
    'sla'?: SLAReference;
    'mobileGuid'?: Guid;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'displayVendorFlag'?: boolean;
    'customFields'?: Array<CustomFieldValue>;
}
export interface ConfigurationQuestion {
    'answerId'?: number;
    'questionId'?: number;
    'question'?: string;
    'answer'?: string;
    'sequenceNumber'?: number;
    'numberOfDecimals'?: number;
    'fieldType'?: ConfigurationQuestion.FieldTypeEnum;
    'requiredFlag'?: boolean;
}
export declare namespace ConfigurationQuestion {
    type FieldTypeEnum = 'Text' | 'Button' | 'Currency' | 'Date' | 'Hyperlink' | 'IPAddress' | 'Checkbox' | 'Number' | 'Percent' | 'TextArea' | 'Password';
}
export interface ConfigurationReference {
    'id'?: number;
    'deviceIdentifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ConfigurationStatus {
    'id'?: number;
    'description': string;
    'closedFlag'?: boolean;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ConfigurationStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ConfigurationType {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    'systemFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ConfigurationTypeQuestion {
    'id'?: number;
    'configurationTypeId'?: number;
    'fieldType': ConfigurationTypeQuestion.FieldTypeEnum;
    'entryType': ConfigurationTypeQuestion.EntryTypeEnum;
    'sequenceNumber'?: number;
    'question': string;
    'numberOfDecimals'?: number;
    'requiredFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'possibleAnswers'?: Array<string>;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ConfigurationTypeQuestion {
    type FieldTypeEnum = 'Text' | 'Button' | 'Currency' | 'Date' | 'Hyperlink' | 'IPAddress' | 'Checkbox' | 'Number' | 'Percent' | 'TextArea' | 'Password';
    type EntryTypeEnum = 'EntryField' | 'List' | 'Option';
}
export interface ConfigurationTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ConnectWiseHostedSetup {
    'id'?: number;
    /**
     * Can be obtained via ConnectWiseHostedApiScreen report
     */
    'screenId': number;
    'description': string;
    'url': string;
    'type': ConnectWiseHostedSetup.TypeEnum;
    'origin'?: string;
    'podHeight'?: number;
    'toolbarButtonDialogHeight'?: number;
    'toolbarButtonDialogWidth'?: number;
    /**
     * Only required for ToolbarButtons
     */
    'toolbarButtonText'?: string;
    'toolbarButtonToolTip'?: string;
    'toolbarButtonIconDocumentId'?: number;
    'disabledFlag'?: boolean;
    'createdBy'?: string;
    'dateCreated'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ConnectWiseHostedSetup {
    type TypeEnum = 'Tab' | 'Pod' | 'ToolbarButton';
}
export interface Contact {
    'id'?: number;
    'firstName': string;
    'lastName'?: string;
    'type'?: ContactTypeReference;
    'company'?: CompanyReference;
    'site'?: SiteReference;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'city'?: string;
    'state'?: string;
    'zip'?: string;
    'country'?: string;
    'relationship'?: RelationshipReference;
    'department'?: ContactDepartmentReference;
    'inactiveFlag'?: boolean;
    'defaultMergeContactId'?: number;
    'securityIdentifier'?: string;
    'managerContactId'?: number;
    'assistantContactId'?: number;
    'title'?: string;
    'school'?: string;
    'nickName'?: string;
    'marriedFlag'?: boolean;
    'childrenFlag'?: boolean;
    'significantOther'?: string;
    'portalPassword'?: string;
    'portalSecurityLevel'?: number;
    'disablePortalLoginFlag'?: boolean;
    'unsubscribeFlag'?: boolean;
    'gender'?: Contact.GenderEnum;
    'birthDay'?: Date;
    'anniversary'?: Date;
    'presence'?: Contact.PresenceEnum;
    'mobileGuid'?: Guid;
    'facebookUrl'?: string;
    'twitterUrl'?: string;
    'linkedInUrl'?: string;
    'defaultBillingFlag'?: boolean;
    'communicationItems'?: Array<ContactCommunicationItem>;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'customFields'?: Array<CustomFieldValue>;
}
export declare namespace Contact {
    type GenderEnum = 'Male' | 'Female';
    type PresenceEnum = 'Online' | 'DoNotDisturb' | 'Away' | 'Offline' | 'NoAgent';
}
export interface ContactCommunication {
    'id'?: number;
    'contactId'?: number;
    'type': CommunicationTypeReference;
    'value': string;
    'extension'?: string;
    'defaultFlag'?: boolean;
    'mobileGuid'?: Guid;
    'communicationType'?: ContactCommunication.CommunicationTypeEnum;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ContactCommunication {
    type CommunicationTypeEnum = 'Phone' | 'Fax' | 'Email';
}
export interface ContactCommunicationItem {
    'id'?: number;
    'type': CommunicationTypeReference;
    'value': string;
    'extension'?: string;
    'defaultFlag'?: boolean;
    'communicationType'?: ContactCommunicationItem.CommunicationTypeEnum;
}
export declare namespace ContactCommunicationItem {
    type CommunicationTypeEnum = 'Phone' | 'Fax' | 'Email';
}
export interface ContactDepartment {
    'id'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ContactDepartmentReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ContactNote {
    'id'?: number;
    'contactId'?: number;
    'text': string;
    'type'?: NoteTypeReference;
    'flagged'?: boolean;
    'enteredBy'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ContactReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ContactRelationship {
    'id'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ContactType {
    'id'?: number;
    'description': string;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ContactTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Conversion {
    'id'?: number;
    'quantity': number;
    'uomType': UnitOfMeasureReference;
    'parentUOM'?: UnitOfMeasureReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Count {
    'count'?: number;
}
/**
 * At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country
 */
export interface CountryReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CreateAccountingBatchRequest {
    'id'?: number;
    'batchIdentifier': string;
    'glInterfaceIdentifier'?: string;
    /**
     * Batch must export Invoices, Expenses or Products
     */
    'exportInvoicesFlag'?: boolean;
    /**
     * Batch must export Invoices, Expenses or Products
     */
    'exportExpensesFlag'?: boolean;
    /**
     * Batch must export Invoices, Expenses or Products
     */
    'exportProductsFlag'?: boolean;
    'processedRecordIds': Array<number>;
    'summarizeExpenses'?: boolean;
}
export interface Currency {
    'id'?: number;
    'currencyIdentifier': string;
    'name'?: string;
    'symbol'?: string;
    'displayIdFlag'?: boolean;
    'displaySymbolFlag'?: boolean;
    'isoCode'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CurrencyReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface CustomFieldValue {
    'id'?: number;
    'caption'?: string;
    'type'?: CustomFieldValue.TypeEnum;
    'entryMethod'?: CustomFieldValue.EntryMethodEnum;
    'numberOfDecimals'?: number;
    'value'?: string;
}
export declare namespace CustomFieldValue {
    type TypeEnum = 'Text' | 'Button' | 'Currency' | 'Date' | 'Hyperlink' | 'IPAddress' | 'Checkbox' | 'Number' | 'Percent' | 'TextArea' | 'Password';
    type EntryMethodEnum = 'EntryField' | 'List' | 'Option';
}
export interface DocumentInfo {
    'id'?: number;
    'title'?: string;
    'fileName'?: string;
    'serverFileName'?: string;
    'owner'?: string;
    'linkFlag'?: boolean;
    'imageFlag'?: boolean;
    'publicFlag'?: boolean;
    'readOnlyFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface DocumentReference {
    'id'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface EmailOpened {
    'id'?: number;
    'campaignId'?: number;
    'contactId': number;
    'dateOpened'?: Date;
}
export interface EndpointRequest {
    'id'?: string;
    'contentType'?: string;
    'method'?: string;
    'relativeUrl'?: string;
    'body'?: string;
}
export interface EndpointResponse {
    'id'?: string;
    'code'?: number;
    'message'?: string;
    'sort'?: number;
}
/**
 * Based on CompanyEntityType Report
 */
export interface EntityTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Error {
    'code'?: string;
    'message'?: string;
    'errors'?: Array<ValidationError>;
}
export interface ExcludedMember {
    'id'?: number;
    'memberId': number;
    'boardId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ExpenseEntry {
    'id'?: number;
    /**
     * Company or chargeToType is required
     */
    'company'?: CompanyReference;
    'chargeToId'?: number;
    /**
     * Company or chargeToType is required
     */
    'chargeToType'?: ExpenseEntry.ChargeToTypeEnum;
    'type': ExpenseTypeReference;
    'member'?: MemberReference;
    'paymentMethod'?: PaymentMethodReference;
    'classification'?: ClassificationReference;
    'amount': number;
    'billableOption': ExpenseEntry.BillableOptionEnum;
    'date': Date;
    'locationId'?: number;
    'businessUnitId'?: number;
    'notes'?: string;
    'agreement'?: AgreementReference;
    'invoiceAmount'?: number;
    'taxes'?: Array<ExpenseTax>;
    'invoice'?: InvoiceReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ExpenseEntry {
    type ChargeToTypeEnum = 'ServiceTicket' | 'ProjectTicket' | 'ChargeCode' | 'Activity';
    type BillableOptionEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
}
export interface ExpenseTax {
    'id'?: number;
    'amount'?: number;
    'type'?: ExpenseTaxTypeReference;
}
export interface ExpenseTaxTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ExpenseType {
    'id'?: number;
    'name': string;
    'amountCaption': string;
    'reimbursementRate'?: number;
    'billExpenses': ExpenseType.BillExpensesEnum;
    'invoiceMarkupOption': ExpenseType.InvoiceMarkupOptionEnum;
    'invoiceMarkupAmount'?: number;
    'advancedAmountFlag'?: boolean;
    'mileageFlag'?: boolean;
    'quantityFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'maxAmount'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ExpenseType {
    type BillExpensesEnum = 'Billable' | 'DoNotBill' | 'NoCharge';
    type InvoiceMarkupOptionEnum = 'Percent' | 'Amount' | 'Mile';
}
export interface ExpenseTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ExportAccountingBatchRequest {
    'batchIdentifier': string;
    'glInterfaceIdentifier'?: string;
    'thruDate'?: Date;
    'locationId'?: number;
    'summarizeInvoices'?: ExportAccountingBatchRequest.SummarizeInvoicesEnum;
    /**
     * Batch export must include invoices, expenses, or products (procurement)
     */
    'exportInvoicesFlag'?: boolean;
    'includedInvoiceIds'?: Array<number>;
    'excludedInvoiceIds'?: Array<number>;
    /**
     * Batch export must include invoices, expenses, or products (procurement)
     */
    'exportExpensesFlag'?: boolean;
    'includedExpenseIds'?: Array<number>;
    'excludedExpenseIds'?: Array<number>;
    /**
     * Batch export must include invoices, expenses, or products (procurement)
     */
    'exportProductsFlag'?: boolean;
    'includedProductIds'?: Array<string>;
    'excludedProductIds'?: Array<string>;
}
export declare namespace ExportAccountingBatchRequest {
    type SummarizeInvoicesEnum = 'Default' | 'Condensed' | 'Detailed';
}
export interface FilterValues {
    'conditions'?: string;
    'orderBy'?: string;
    'childconditions'?: string;
    'customfieldconditions'?: string;
}
export interface Forecast {
    'id'?: number;
    'name'?: string;
    'revenue'?: number;
    'cost'?: number;
    'type': Forecast.TypeEnum;
    'status'?: OpportunityStatusReference;
    'includedFlag'?: boolean;
    'recurring'?: ProductRecurring;
    'percent'?: number;
    'margin'?: number;
    'opportunityId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace Forecast {
    type TypeEnum = 'Product' | 'Service' | 'Agreement' | 'Other1' | 'Other2';
}
export interface FormSubmitted {
    'id'?: number;
    'campaignId'?: number;
    'contactId': number;
    'dateSubmitted'?: Date;
    'url': string;
    'queryString'?: string;
    'pageType'?: string;
    'pageSubType'?: string;
    'topic'?: string;
    'version'?: string;
    'status'?: string;
}
export interface GLExport {
    /**
     * Mapped to GlPreferences Class
     */
    'exportSettings'?: GLExportSettings;
    'vendors'?: Array<GLExportVendor>;
    'customers'?: Array<GLExportCustomer>;
    'transactions'?: Array<GLExportTransaction>;
    'expenses'?: Array<GLExportExpense>;
    'expenseBills'?: Array<GLExportExpenseBill>;
    'purchaseTransactions'?: Array<GLExportPurchaseTransaction>;
    'adjustmentTransactions'?: Array<GLExportAdjustmentTransaction>;
    'inventoryTransfers'?: Array<GLExportInventoryTransfer>;
}
export interface GLExportAdjustmentTransaction {
    'id'?: string;
    'documentType'?: string;
    'documentDate'?: Date;
    'glTypeID'?: string;
    'accountNumber'?: string;
    'memo'?: string;
    'glClass'?: string;
    'adjustmentDescription'?: string;
    'adjustmentDetail'?: Array<GLExportAdjustmentTransactionDetail>;
}
export interface GLExportAdjustmentTransactionDetail {
    'glClass'?: string;
    'description'?: string;
    'memo'?: string;
    'item'?: IvItemReference;
    'quantity'?: number;
    'total'?: number;
    'cost'?: number;
    'costAccountNumber'?: string;
    'inventoryAccountNumber'?: string;
    'accountNumber'?: string;
    'productAccountNumber'?: string;
}
export interface GLExportCustomer {
    'company'?: CompanyReference;
    'companyType'?: CompanyTypeReference;
    'contact'?: ContactReference;
    'site'?: SiteReference;
    'accountNumber'?: string;
    'billingTerms'?: BillingTermsReference;
    'billingTermsXref'?: string;
    'dueDays'?: number;
    'taxable'?: boolean;
    'taxCode'?: TaxCodeReference;
    'currency'?: CurrencyReference;
    'stateTaxXref'?: string;
    'countyTaxXref'?: string;
    'cityTaxXref'?: string;
    'countryTaxXref'?: string;
    'compositeTaxXref'?: string;
    'stateTaxRate'?: number;
    'countyTaxRate'?: number;
    'cityTaxRate'?: number;
    'countryTaxRate'?: number;
    'compositeTaxRate'?: number;
    'taxGroupRate'?: number;
    'taxAgencyXref'?: string;
    'stateTaxAgencyXref'?: string;
    'countyTaxAgencyXref'?: string;
    'cityTaxAgencyXref'?: string;
    'countryTaxAgencyXref'?: string;
    'compositeTaxAgencyXref'?: string;
}
export interface GLExportExpense {
    'id'?: number;
    'documentDate'?: Date;
    'documentType'?: string;
    'apAccountNumber'?: string;
    'apClass'?: string;
    'accountNumber'?: string;
    'glClass'?: string;
    'glTypeId'?: string;
    'memo'?: string;
    'description'?: string;
    'periodStartDate'?: Date;
    'periodEndDate'?: Date;
    'member'?: MemberReference;
    'vendorNumber'?: string;
    'company'?: CompanyReference;
    'companyAccountNumber'?: string;
    'project'?: ProjectReference;
    'currency'?: CurrencyReference;
    'total'?: number;
    'offset'?: GLExportExpenseOffset;
}
export interface GLExportExpenseBill {
    'id'?: number;
    'documentDate'?: string;
    'documentType'?: string;
    'documentNumber'?: string;
    'memo'?: string;
    'glClass'?: string;
    'apAccountNumber'?: string;
    'member'?: MemberReference;
    'vendorNumber'?: string;
    'currency'?: CurrencyReference;
    'total'?: number;
    'detail'?: Array<GLExportExpenseBillDetail>;
}
export interface GLExportExpenseBillDetail {
    'id'?: number;
    'documentDate'?: string;
    'glTypeId'?: string;
    'memo'?: string;
    'company'?: CompanyReference;
    'accountNumber'?: string;
    'expenseClass'?: ClassificationReference;
    'currency'?: CurrencyReference;
    'total'?: number;
    'billable'?: boolean;
    'reimbursable'?: boolean;
    'companyAdvance'?: boolean;
}
export interface GLExportExpenseOffset {
    'id'?: number;
    'documentDate'?: Date;
    'documentType'?: string;
    'accountNumber'?: string;
    'glTypeId'?: string;
    'glClass'?: string;
    'member'?: MemberReference;
    'memo'?: string;
    'description'?: string;
    'total'?: number;
}
export interface GLExportInventoryTransfer {
    'id'?: string;
    'documentType'?: string;
    'documentDate'?: Date;
    'accountNumber'?: string;
    'glClass'?: string;
    'glTypeId'?: string;
    'description'?: string;
    'salesCode'?: string;
    'memo'?: string;
    'costAcccountNumber'?: string;
    'inventoryAccountNumber'?: string;
    'transferId'?: number;
    'item'?: IvItemReference;
    'glItemId'?: string;
    'salesDescription'?: string;
    'itemDescription'?: string;
    'currency'?: CurrencyReference;
    'itemPrice'?: number;
    'taxable'?: boolean;
    'unitOfMeasure'?: UnitOfMeasureReference;
    'quantity'?: number;
    'cost'?: number;
    'total'?: number;
    'subCategory'?: ProductSubCategoryReference;
    'serializedFlag'?: boolean;
    'serialNumbers'?: string;
    'shipmentMethod'?: ShipmentMethodReference;
    'bin'?: WarehouseBinReference;
    'warehouse'?: WarehouseReference;
    'transferFromBin'?: WarehouseBinReference;
    'transferFromLocationXref'?: string;
    'transferToBin'?: WarehouseBinReference;
    'transferToLocationXref'?: string;
    'locationXref'?: string;
    'priceLevelXref'?: string;
    'uomScheduleXref'?: string;
    'itemTypeXref'?: string;
    'inventoryXref'?: string;
    'cogsXref'?: string;
    'taxNote'?: string;
    'taxCode'?: TaxCodeReference;
    'offset'?: GLExportInventoryTransferOffset;
}
export interface GLExportInventoryTransferOffset {
    'id'?: number;
    'documentType'?: string;
    'documentDate'?: Date;
    'accountNumber'?: string;
    'glClass'?: string;
    'total'?: number;
    'memo'?: string;
    'description'?: string;
    'glTypeId'?: string;
}
export interface GLExportPurchaseTransaction {
    'id'?: string;
    'documentDate'?: Date;
    'documentNumber'?: string;
    'description'?: string;
    'memo'?: string;
    'apAccountNumber'?: string;
    'purchaseDate'?: Date;
    'company'?: CompanyReference;
    'companyType'?: CompanyTypeReference;
    'contact'?: ContactReference;
    'site'?: SiteReference;
    'purchaseClass'?: string;
    'freightAmount'?: number;
    'freightPackingSlip'?: string;
    'packingSlip'?: string;
    'dropshipFlag'?: boolean;
    'currency'?: CurrencyReference;
    'total'?: number;
    'billingTerms'?: BillingTermsReference;
    'billingTermsXref'?: string;
    'dueDays'?: number;
    'vendorNumber'?: string;
    'vendorAccountNumber'?: string;
    'vendorInvoiceDate'?: Date;
    'vendorInvoiceNumber'?: string;
    'taxAgencyXref'?: string;
    'stateTaxXref'?: string;
    'countyTaxXref'?: string;
    'cityTaxXref'?: string;
    'shipToCompany'?: CompanyReference;
    'shipToCompanyAccountNumber'?: string;
    'shipToCompanyType'?: CompanyTypeReference;
    'shipToContact'?: ContactReference;
    'shipToSite'?: SiteReference;
    'shipToTaxGroup'?: string;
    'taxCode'?: TaxCodeReference;
    'taxGroupRate'?: number;
    'useAvalaraTaxFlag'?: boolean;
    'purchaseHeaderTaxGroup'?: string;
    'purchaseHeaderTaxableFlag'?: boolean;
    'purchaseHeaderFreightTaxableFlag'?: boolean;
    'purchaseDetail'?: Array<GLExportPurchaseTransactionDetail>;
    'purchaseDetailTax'?: Array<GLExportPurchaseTransactionDetailTax>;
}
export interface GLExportPurchaseTransactionDetail {
    'id'?: number;
    'documentDate'?: Date;
    'glClass'?: string;
    'glTypeId'?: string;
    'glItemId'?: string;
    'salesCode'?: string;
    'description'?: string;
    'cost'?: number;
    'memo'?: string;
    'taxNote'?: string;
    'vendorNumber'?: string;
    'accountNumber'?: string;
    'costAccountNumber'?: string;
    'inventoryAccountNumber'?: string;
    'vendorAccountNumber'?: string;
    'item'?: IvItemReference;
    'itemDescription'?: string;
    'salesDescription'?: string;
    'taxable'?: boolean;
    'itemPrice'?: number;
    'itemCost'?: number;
    'unitOfMeasure'?: UnitOfMeasureReference;
    'quantity'?: number;
    'total'?: number;
    'currency'?: CurrencyReference;
    'serializedFlag'?: boolean;
    'serialNumbers'?: string;
    'dropShippedFlag'?: boolean;
    'lineNumber'?: number;
    'warehouseBin'?: WarehouseBinReference;
    'warehouseSite'?: SiteReference;
    'subCategory'?: ProductSubCategoryReference;
    'shipmentMethod'?: ShipmentMethodReference;
    'itemTypeXref'?: string;
    'inventoryXref'?: string;
    'cogsXref'?: string;
    'uomScheduleXref'?: string;
    'priceLevelXref'?: string;
    'locationXref'?: string;
    'taxCode'?: TaxCodeReference;
    'purchaseHeaderTaxGroup'?: string;
    'taxCodeXref'?: string;
    'taxRate'?: number;
    'taxAgencyXref'?: string;
}
export interface GLExportPurchaseTransactionDetailTax {
    'id'?: number;
    'documentDate'?: Date;
    'accountNumber'?: string;
    'glClass'?: string;
    'cost'?: number;
    'salesCode'?: string;
    'glTypeId'?: string;
    'glItemId'?: string;
    'memo'?: string;
    'vendorNumber'?: string;
    'vendorAccountNumber'?: string;
    'costAccountNumber'?: string;
    'inventoryAccountNumber'?: string;
    'itemTypeXref'?: string;
    'inventoryXref'?: string;
    'cogsXref'?: string;
    'uomScheduleXref'?: string;
    'priceLevelXref'?: string;
    'locationXref'?: string;
    'item'?: IvItemReference;
    'taxableFlag'?: boolean;
    'salesDescription'?: string;
    'itemDescription'?: string;
    'itemPrice'?: number;
    'itemCost'?: number;
    'unitOfMeasure'?: UnitOfMeasureReference;
    'quantity'?: number;
    'total'?: number;
    'currency'?: CurrencyReference;
    'serializedFlag'?: boolean;
    'serialNumbers'?: string;
    'dropShippedFlag'?: boolean;
    'lineNumber'?: number;
    'warehouseSite'?: SiteReference;
    'warehouseBin'?: WarehouseBinReference;
    'shipmentMethod'?: ShipmentMethodReference;
    'subCategory'?: ProductSubCategoryReference;
    'taxCode'?: TaxCodeReference;
    'taxRate'?: number;
    'taxRatePercent'?: number;
    'taxAgencyXref'?: string;
    'taxNote'?: string;
    'purchaseHeaderTaxGroup'?: string;
}
/**
 * Mapped to GlPreferences Class
 */
export interface GLExportSettings {
}
export interface GLExportTransaction {
    'id'?: number;
    'glClass'?: string;
    'glTypeId'?: string;
    'documentDate'?: Date;
    'documentNumber'?: string;
    'documentType'?: string;
    'memo'?: string;
    'description'?: string;
    'attention'?: string;
    'salesTerritory'?: string;
    'company'?: CompanyReference;
    'companyType'?: CompanyTypeReference;
    'companyAccountNumber'?: string;
    'site'?: SiteReference;
    'billingTerms'?: BillingTermsReference;
    'billingTermsXref'?: string;
    'dueDays'?: number;
    'dueDate'?: Date;
    'emailDeliveryFlag'?: boolean;
    'printDeliveryFlag'?: boolean;
    'agreementPrePaymentFlag'?: boolean;
    'accountNumber'?: string;
    'billingType'?: string;
    'glEntryIds'?: string;
    'purchaseOrder'?: PurchaseOrderReference;
    'project'?: ProjectReference;
    'currency'?: CurrencyReference;
    'total'?: number;
    'salesRepId'?: string;
    'salesRepName'?: string;
    'taxable'?: boolean;
    'taxableTotal'?: number;
    'taxCode'?: TaxCodeReference;
    'taxGroupRate'?: number;
    'piggyBackFlag'?: boolean;
    'taxAccountNumber'?: string;
    'salesTax'?: number;
    'stateTax'?: number;
    'countyTax'?: number;
    'cityTax'?: number;
    'taxableAmount1'?: number;
    'taxableAmount2'?: number;
    'taxableAmount3'?: number;
    'taxableAmount4'?: number;
    'taxableAmount5'?: number;
    'taxAgencyXref'?: string;
    'stateTaxXref'?: string;
    'countyTaxXref'?: string;
    'taxId'?: string;
    'taxDpAppliedFlag'?: boolean;
    'useAvalaraFlag'?: boolean;
    'sendAvalaraTaxFlag'?: boolean;
    'shipToCompany'?: CompanyReference;
    'shipCompanyAccountNumber'?: string;
    'shipCompanyType'?: CompanyTypeReference;
    'shipTaxId'?: string;
    'shipSite'?: SiteReference;
    'shipContact'?: ContactReference;
    'detail'?: Array<GLExportTransactionDetail>;
}
export interface GLExportTransactionDetail {
    'id'?: number;
    'documentDate'?: Date;
    'documentType'?: string;
    'accountNumber'?: string;
    'glClass'?: string;
    'glTypeId'?: string;
    'glItemId'?: string;
    'invoiceSummaryOption'?: number;
    'cost'?: number;
    'salesCode'?: string;
    'memo'?: string;
    'description'?: string;
    'quantity'?: number;
    'total'?: number;
    'currency'?: CurrencyReference;
    'timeEntry'?: TimeEntryReference;
    'costAccountNumber'?: string;
    'inventoryAccountNumber'?: string;
    'productAccountNumber'?: string;
    'taxCode'?: TaxCodeReference;
    'taxCodeXref'?: string;
    'taxAgencyXref'?: string;
    'taxNote'?: string;
    'taxRate'?: number;
    'taxRatePercent'?: number;
    'taxableFlag'?: boolean;
    'taxable2Flag'?: boolean;
    'taxable3Flag'?: boolean;
    'taxable4Flag'?: boolean;
    'taxable5Flag'?: boolean;
    'item'?: IvItemReference;
    'itemTaxableFlag'?: boolean;
    'itemPrice'?: number;
    'itemCost'?: number;
    'itemDescription'?: string;
    'salesDescription'?: string;
    'unitOfMeasure'?: UnitOfMeasureReference;
    'subCategory'?: ProductSubCategoryReference;
    'serializedFlag'?: boolean;
    'serialNumbers'?: string;
    'warehouseSite'?: SiteReference;
    'warehouseBin'?: WarehouseBinReference;
    'shipmentMethod'?: ShipmentMethodReference;
    'dropShippedFlag'?: boolean;
    'itemTypeXref'?: string;
    'inventoryXref'?: string;
    'cogsXref'?: string;
    'uomScheduleXref'?: string;
    'priceLevelXref'?: string;
    'locationXref'?: string;
}
export interface GLExportVendor {
    /**
     * Vendor Can be either Member or Company Reference
     */
    'member'?: MemberReference;
    /**
     * Vendor Can be either Member or Company Reference
     */
    'vendor'?: CompanyReference;
    'vendorNumber'?: string;
    'company'?: CompanyReference;
    'contact'?: ContactReference;
    'accountNumber'?: string;
    'billingTerms'?: BillingTermsReference;
    'dueDays'?: number;
    'site'?: SiteReference;
    'taxCode'?: TaxCodeReference;
}
export interface GenericIdIdentifierReference {
    'id'?: number;
    'identifier'?: string;
}
export interface Group {
    'id'?: number;
    'name': string;
    'publicDescription'?: string;
    'publicFlag'?: boolean;
    'inactiveFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface GroupReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Guid {
}
export interface InOutBoard {
    'id'?: number;
    'member': MemberReference;
    'inOutType': InOutTypeReference;
    'additionalInfo'?: string;
    'dateBack': Date;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface InOutType {
    'id'?: number;
    'description': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface InOutTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Info {
    'version'?: string;
    'isCloud'?: boolean;
    'serverTimeZone'?: string;
}
export interface Invoice {
    'id'?: number;
    'invoiceNumber'?: string;
    'type': Invoice.TypeEnum;
    'status'?: BillingStatusReference;
    'company': CompanyReference;
    'billToCompany'?: CompanyReference;
    'shipToCompany'?: CompanyReference;
    'applyToType'?: Invoice.ApplyToTypeEnum;
    'applyToId'?: number;
    'attention'?: string;
    'billingSite'?: SiteReference;
    'shippingSite'?: SiteReference;
    'billingTerms'?: BillingTermsReference;
    'reference'?: string;
    'customerPO'?: string;
    /**
     * Can be obtained via InvoiceTemplate report
     */
    'templateSetupId'?: number;
    /**
     * Can be obtained via InvoiceEmailTemplate report
     */
    'emailTemplateId'?: number;
    'addToBatchEmailList'?: boolean;
    'date'?: Date;
    'restrictDownpaymentFlag'?: boolean;
    'locationId'?: number;
    'departmentId'?: number;
    'territoryId'?: number;
    'topComment'?: string;
    'bottomComment'?: string;
    'taxableFlag'?: boolean;
    'taxCode'?: TaxCodeReference;
    'internalNotes'?: string;
    'downpaymentPreviouslyTaxedFlag'?: boolean;
    'serviceTotal'?: number;
    'dueDate'?: Date;
    'expenseTotal'?: number;
    'productTotal'?: number;
    'previousProgressApplied'?: number;
    'serviceAdjustmentAmount'?: number;
    'agreementAmount'?: number;
    'downpaymentApplied'?: number;
    'subtotal'?: number;
    'total'?: number;
    'remainingDownpayment'?: number;
    'salesTax'?: number;
    'adjustmentReason'?: string;
    'adjustedBy'?: string;
    'payments'?: number;
    'credits'?: number;
    'balance'?: number;
    'specialInvoiceFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace Invoice {
    type TypeEnum = 'Agreement' | 'CreditMemo' | 'DownPayment' | 'Miscellaneous' | 'Progress' | 'Standard';
    type ApplyToTypeEnum = 'All' | 'Agreement' | 'Project' | 'ProjectPhase' | 'SalesOrder' | 'Ticket';
}
export interface InvoiceReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface InvoiceTemplateReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Item {
    'id'?: number;
    'name': string;
    'inactive'?: boolean;
    'typeAssociations'?: Array<TypeAssociations>;
    'addAllSubTypes'?: boolean;
    'removeAllSubTypes'?: boolean;
    'typeId'?: number;
    'boardId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface IvItemReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface JObject {
}
export interface KnowledgeBaseArticle {
    'id'?: number;
    'title': string;
    'issue': string;
    'resolution': string;
    'locationId'?: number;
    'businessUnitId'?: number;
    'board'?: BoardReference;
    'categoryId'?: number;
    'subCategoryId'?: number;
    'dateCreated'?: string;
    'createdBy'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Link {
    'id'?: number;
    'name': string;
    'tableReferenceId': number;
    'url'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface LinkClicked {
    'id'?: number;
    'campaignId'?: number;
    'contactId': number;
    'dateClicked'?: Date;
    'url': string;
    'queryString'?: string;
}
export interface Location {
    'id'?: number;
    'name': string;
    'where': Location.WhereEnum;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace Location {
    type WhereEnum = 'OnSite' | 'Remote' | 'InHouse';
}
export interface ManagementBackup {
    'id'?: number;
    'type': AgreementTypeReference;
    'item': CatalogItemReference;
    'billingLevel': ManagementBackup.BillingLevelEnum;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ManagementBackup {
    type BillingLevelEnum = 'Summary' | 'Detail';
}
export interface ManagementEmail {
    'id'?: number;
    'name': string;
    'managementSolution': ManagementEmail.ManagementSolutionEnum;
    'identifier': string;
    'emailUsername'?: string;
    /**
     * The password field can only be set on initial POST.
     */
    'emailPassword'?: string;
    'serverPrefix'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ManagementEmail {
    type ManagementSolutionEnum = 'DoubleCheck' | 'Postini';
}
export interface ManagementSolutionReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Manufacturer {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ManufacturerReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface MarketDescription {
    'id'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface MarketingCompany {
    'id': number;
    'groupId'?: number;
    'defaultContactFlag'?: boolean;
    'allContactsFlag'?: boolean;
    'unsubscribeFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface MarketingContact {
    'id': number;
    'groupId'?: number;
    'note'?: string;
    'unsubscribeFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Member {
    'adminFlag'?: boolean;
    'allowExpensesEnteredAgainstCompaniesFlag'?: boolean;
    'allowInCellEntryOnTimeSheet'?: boolean;
    'billableForecast'?: number;
    'calendar'?: CalendarReference;
    'calendarSyncIntegrationFlag'?: boolean;
    'country'?: CountryReference;
    'dailyCapacity'?: number;
    'daysTolerance'?: number;
    'defaultDepartmentId': number;
    'defaultEmail': Member.DefaultEmailEnum;
    'defaultLocationId': number;
    'defaultPhone': Member.DefaultPhoneEnum;
    'disableOnlineFlag'?: boolean;
    'enableLdapAuthenticationFlag'?: boolean;
    'enableMobileFlag'?: boolean;
    'enableMobileGpsFlag'?: boolean;
    'enterTimeAgainstCompanyFlag'?: boolean;
    'expenseApprover': MemberReference;
    'firstName': string;
    'hideMemberInDispatchPortalFlag'?: boolean;
    'hireDate': Date;
    'homeEmail'?: string;
    'homeExtension'?: string;
    'homePhone'?: string;
    'hourlyCost'?: number;
    'hourlyRate'?: number;
    'id'?: number;
    'identifier': string;
    'inactiveDate'?: Date;
    'inactiveFlag'?: boolean;
    'includeInUtilizationReportingFlag'?: boolean;
    'lastLogin'?: string;
    'lastName': string;
    /**
     * F = Regular Member, A = API Member, C = StreamlineIT Member, X = Subcontractor Member
     */
    'licenseClass': Member.LicenseClassEnum;
    'mapiName'?: string;
    'middleInitial'?: string;
    'minimumHours'?: number;
    'mobileEmail'?: string;
    'mobileExtension'?: string;
    'mobilePhone'?: string;
    'notes'?: string;
    'officeEmail'?: string;
    'officeExtension'?: string;
    'officePhone'?: string;
    'projectDefaultBoard'?: ProjectBoardReference;
    'projectDefaultDepartmentId'?: number;
    'projectDefaultLocationId'?: number;
    'reportsTo'?: MemberReference;
    'requireExpenseEntryFlag'?: boolean;
    'requireStartAndEndTimeOnTimeEntryFlag'?: boolean;
    'requireTimeSheetEntryFlag'?: boolean;
    'restrictDefaultSalesTerritoryFlag'?: boolean;
    'restrictDefaultWarehouseBinFlag'?: boolean;
    'restrictDefaultWarehouseFlag'?: boolean;
    'restrictDepartmentFlag'?: boolean;
    'restrictLocationFlag'?: boolean;
    'restrictProjectDefaultDepartmentFlag'?: boolean;
    'restrictProjectDefaultLocationFlag'?: boolean;
    'restrictScheduleFlag'?: boolean;
    'restrictServiceDefaultDepartmentFlag'?: boolean;
    'restrictServiceDefaultLocationFlag'?: boolean;
    'salesDefaultLocationId': number;
    'scheduleCapacity'?: number;
    'scheduleDefaultDepartmentId'?: number;
    'scheduleDefaultLocationId'?: number;
    'securityLevel'?: string;
    'securityLocationId'?: number;
    'securityRole'?: SecurityRoleReference;
    'serviceDefaultBoard'?: BoardReference;
    'serviceDefaultDepartmentId'?: number;
    'serviceDefaultLocationId'?: number;
    'serviceLocation'?: ServiceLocationReference;
    'serviceTeams'?: Array<number>;
    'timeApprover': MemberReference;
    'timeReminderEmailFlag'?: boolean;
    'timeSheetStartDate'?: Date;
    'timeZone': TimeZoneReference;
    'title'?: string;
    'type'?: MemberTypeReference;
    'vendorNumber'?: string;
    'warehouse'?: WarehouseReference;
    'warehouseBin'?: WarehouseBinReference;
    'workRole': WorkRoleReference;
    'workType'?: WorkTypeReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'systemFlag'?: boolean;
}
export declare namespace Member {
    type DefaultEmailEnum = 'Office' | 'Mobile' | 'Home';
    type DefaultPhoneEnum = 'Office' | 'Mobile' | 'Home';
    type LicenseClassEnum = 'F' | 'A' | 'C' | 'X';
}
/**
 * Activity schedule requires a member
 */
export interface MemberReference {
    'id'?: number;
    'identifier'?: string;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface MemberTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface MenuEntry {
    'id'?: number;
    'menuLocation': MenuLocationReference;
    'caption': string;
    'link': string;
    'newWindowFlag': boolean;
    'locationIds'?: Array<number>;
    'origin'?: string;
    'addAllLocations'?: boolean;
    'removeAllLocations'?: boolean;
    'smallMenuIconId'?: number;
    'largeMenuIconId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface MenuLocationReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
/**
 * Metadata of the entity
 */
export interface Metadata {
}
export interface NoteType {
    'id'?: number;
    'identifier'?: string;
    'name': string;
    'defaultFlag'?: boolean;
    'importFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface NoteTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Opportunity {
    'id'?: number;
    'name': string;
    'expectedCloseDate'?: Date;
    'type'?: OpportunityTypeReference;
    'stage'?: OpportunityStageReference;
    'status'?: OpportunityStatusReference;
    'priority'?: OpportunityPriorityReference;
    'notes'?: string;
    'probability'?: OpportunityProbabilityReference;
    'source'?: string;
    'rating'?: OpportunityRatingReference;
    'campaign'?: CampaignReference;
    'primarySalesRep': MemberReference;
    'secondarySalesRep'?: MemberReference;
    'locationId'?: number;
    'businessUnitId'?: number;
    'company': CompanyReference;
    'contact': ContactReference;
    'site': SiteReference;
    'customerPO'?: string;
    'pipelineChangeDate'?: Date;
    'dateBecameLead'?: Date;
    'closedDate'?: Date;
    'closedBy'?: MemberReference;
    'totalSalesTax'?: number;
    'shipToCompany'?: CompanyReference;
    'shipToContact'?: ContactReference;
    'shipToSite'?: SiteReference;
    'billToCompany'?: CompanyReference;
    'billToContact'?: ContactReference;
    'billToSite'?: SiteReference;
    'billingTerms'?: BillingTermsReference;
    'taxCode'?: TaxCodeReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'customFields'?: Array<CustomFieldValue>;
}
export interface OpportunityContact {
    'id'?: number;
    'contact': ContactReference;
    'company'?: CompanyReference;
    'role'?: OpportunitySalesRoleReference;
    'notes'?: string;
    'referralFlag'?: boolean;
    'opportunityId'?: number;
    'phoneNumber'?: string;
    'emailAddress'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityNote {
    'id'?: number;
    'opportunityId'?: number;
    'type'?: NoteTypeReference;
    'text': string;
    'flagged'?: boolean;
    'enteredBy'?: string;
    'mobileGuid'?: Guid;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityPriorityReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityProbabilityReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityRating {
    'id'?: number;
    'name': string;
    'sortOrder'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityRatingReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunitySalesRoleReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityStage {
    'id'?: number;
    'name': string;
    'probability'?: OpportunityProbabilityReference;
    'color'?: string;
    'sequenceNumber'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityStageReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityStatus {
    'id'?: number;
    'name': string;
    'wonFlag'?: boolean;
    'lostFlag'?: boolean;
    'closedFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'enteredBy'?: string;
    'dateEntered'?: Date;
}
export interface OpportunityStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityToAgreementConversion {
    'agreementId'?: number;
    'name'?: string;
    'type'?: AgreementTypeReference;
    'startDate'?: string;
    'endDate'?: string;
    'noEndingDateFlag'?: boolean;
    'billCycleId'?: number;
    'billOneTimeFlag'?: boolean;
    'locationId'?: number;
    'businessUnitId'?: number;
    'includeAllNotesFlag'?: boolean;
    'includeAllDocumentsFlag'?: boolean;
    'includeAllProductsFlag'?: boolean;
    'includeNoteIds'?: Array<number>;
    'includeDocumentIds'?: Array<number>;
    'includeProductIds'?: Array<number>;
}
export interface OpportunityToProjectConversion {
    'projectId'?: number;
    'name'?: string;
    'status'?: ProjectStatusReference;
    'locationId'?: number;
    'businessUnitId'?: number;
    'board'?: ProjectBoardReference;
    'manager'?: MemberReference;
    'estimatedStart'?: string;
    'estimatedEnd'?: string;
    'includeAllNotesFlag'?: boolean;
    'includeAllDocumentsFlag'?: boolean;
    'includeAllProductsFlag'?: boolean;
    'includeNoteIds'?: Array<number>;
    'includeDocumentIds'?: Array<number>;
    'includeProductIds'?: Array<number>;
}
export interface OpportunityToSalesOrderConversion {
    'salesOrderId'?: number;
    'name'?: string;
    'includeAllNotesFlag'?: boolean;
    'includeAllDocumentsFlag'?: boolean;
    'includeAllProductsFlag'?: boolean;
    'includeNoteIds'?: Array<number>;
    'includeDocumentIds'?: Array<number>;
    'includeProductIds'?: Array<number>;
}
export interface OpportunityToServiceTicketConversion {
    'ticketId'?: number;
    'summary'?: string;
    'includeAllNotesFlag'?: boolean;
    'includeAllDocumentsFlag'?: boolean;
    'includeAllProductsFlag'?: boolean;
    'includeNoteIds'?: Array<number>;
    'includeDocumentIds'?: Array<number>;
    'includeProductIds'?: Array<number>;
}
export interface OpportunityType {
    'id'?: number;
    'description': string;
    'inactiveFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OpportunityTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Order {
    'id'?: number;
    'company': CompanyReference;
    'contact'?: ContactReference;
    'phone'?: string;
    'phoneExt'?: string;
    'email'?: string;
    'site'?: SiteReference;
    'status': OrderStatusReference;
    'opportunity'?: OpportunityReference;
    'orderDate'?: Date;
    'dueDate'?: Date;
    'billingTerms'?: BillingTermsReference;
    'taxCode'?: TaxCodeReference;
    'poNumber'?: string;
    'locationId'?: number;
    'businessUnitId'?: number;
    'salesRep': MemberReference;
    'notes'?: string;
    'billClosedFlag'?: boolean;
    'billShippedFlag'?: boolean;
    'restrictDownpaymentFlag'?: boolean;
    'description'?: string;
    'topCommentFlag'?: boolean;
    'bottomCommentFlag'?: boolean;
    'shipToCompany'?: CompanyReference;
    'shipToContact'?: ContactReference;
    'shipToSite'?: SiteReference;
    'billToCompany'?: CompanyReference;
    'billToContact'?: ContactReference;
    'billToSite'?: SiteReference;
    'productIds'?: Array<number>;
    'documentIds'?: Array<number>;
    'invoiceIds'?: Array<number>;
    'configIds'?: Array<number>;
    'total'?: number;
    'taxTotal'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OrderStatus {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'sortOrder'?: number;
    'closedFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OrderStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OwnershipType {
    'id'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface OwnershipTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PatchOperation {
    'op'?: string;
    'path'?: string;
    'value'?: string | {};
}
export interface Payment {
    'id'?: number;
    'type'?: string;
    'invoice'?: InvoiceReference;
    'amount': number;
    'paymentDate'?: Date;
    'appliedBy'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PaymentMethodReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PhaseStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PortalSecurity {
    'identifier'?: string;
    'enabled'?: boolean;
}
export interface PricingBreak {
    'id'?: number;
    'detailId'?: number;
    'amount'?: number;
    'quantityStart'?: number;
    'quantityEnd'?: number;
    'priceMethod': PricingBreak.PriceMethodEnum;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace PricingBreak {
    type PriceMethodEnum = 'FlatRateForRange' | 'PercentMarkupFromCost' | 'PercentMarkdownFromPrice' | 'PricePerUnit';
}
export interface PricingDetail {
    'id'?: number;
    'product'?: CatalogItemReference;
    'category'?: ProductCategoryReference;
    'subCategory'?: ProductSubCategoryReference;
    'startDate': Date;
    'endDate'?: Date;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PricingSchedule {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    'defaultFlag'?: boolean;
    'companies'?: Array<number>;
    'setAllCompaniesFlag'?: boolean;
    'removeAllCompaniesFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PricingScheduleReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Priority {
    'id'?: number;
    'name': string;
    'color': string;
    'sortOrder'?: number;
    'defaultFlag'?: boolean;
    'imageLink'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PriorityReference {
    'id'?: number;
    'name'?: string;
    'sort'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProductCategoryReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProductComponent {
    'id'?: number;
    'sequenceNumber'?: number;
    'quantity': number;
    'catalogItem': CatalogItemReference;
    'hidePriceFlag'?: boolean;
    'hideItemIdentifierFlag'?: boolean;
    'hideDescriptionFlag'?: boolean;
    'hideQuantityFlag'?: boolean;
    'vendor'?: CompanyReference;
    'parentProductItem'?: ProductItemReference;
    'productItem'?: ProductItemReference;
    'price'?: number;
    'cost'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProductItem {
    'id'?: number;
    'catalogItem': CatalogItemReference;
    'chargeToId': number;
    'chargeToType': ProductItem.ChargeToTypeEnum;
    'description'?: string;
    'sequenceNumber'?: number;
    'quantity'?: number;
    'price'?: number;
    'cost'?: number;
    'discount'?: number;
    'priceMethod'?: ProductItem.PriceMethodEnum;
    'billableOption': ProductItem.BillableOptionEnum;
    'agreement'?: AgreementReference;
    'locationId'?: number;
    'businessUnitId'?: number;
    'vendor'?: CompanyReference;
    'vendorSku'?: string;
    'taxableFlag'?: boolean;
    'dropshipFlag'?: boolean;
    'specialOrderFlag'?: boolean;
    'phaseProductFlag'?: boolean;
    'cancelledFlag'?: boolean;
    'quantityCancelled'?: number;
    'cancelledReason'?: string;
    'customerDescription'?: string;
    'internalNotes'?: string;
    'productSuppliedFlag'?: boolean;
    'subContractorShipToId'?: number;
    'subContractorAmountLimit'?: number;
    'recurring'?: ProductRecurring;
    'sla'?: SLAReference;
    'entityType'?: EntityTypeReference;
    'forecastDetailId'?: number;
    'cancelledBy'?: number;
    'cancelledDate'?: Date;
    'warehouse'?: string;
    'warehouseBin'?: string;
    'purchaseDate'?: Date;
    'integrationXRef'?: string;
    'listPrice'?: number;
    'serialNumberIds'?: Array<number>;
    'company'?: CompanyReference;
    'forecastStatus'?: OpportunityStatusReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'bypassForecastUpdate'?: boolean;
}
export declare namespace ProductItem {
    type ChargeToTypeEnum = 'Ticket' | 'Project' | 'Invoice' | 'Opportunity' | 'SalesOrder';
    type PriceMethodEnum = 'FlatRateForRange' | 'PercentMarkupFromCost' | 'PercentMarkdownFromPrice' | 'PricePerUnit';
    type BillableOptionEnum = 'Billable' | 'DoNotBill' | 'NoCharge';
}
export interface ProductItemReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProductPickingShippingDetail {
    'id'?: number;
    'pickedQuantity': number;
    'shippedQuantity': number;
    'warehouse': WarehouseReference;
    'warehouseBin': WarehouseBinReference;
    'shipmentMethod'?: ShipmentMethodReference;
    'serialNumber'?: string;
    'serialNumberIds'?: Array<number>;
    'trackingNumber'?: string;
    'productItem'?: ProductItemReference;
    'lineNumber'?: number;
    'quantity'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProductRecurring {
    'recurringRevenue': number;
    'recurringCost': number;
    'startDate': Date;
    'endDate': Date;
    'billCycleId': number;
    'cycles': number;
    'cycleType': ProductRecurring.CycleTypeEnum;
}
export declare namespace ProductRecurring {
    type CycleTypeEnum = 'CalendarYear' | 'ContractYear';
}
export interface ProductReference {
    'id'?: number;
    'description'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProductSubCategoryReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProductType {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    'typeXref'?: ProductType.TypeXrefEnum;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ProductType {
    type TypeXrefEnum = 'InventoryPart' | 'NonInventoryPart' | 'OtherCharge' | 'Service';
}
export interface ProductTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Project {
    'id'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'actualEnd'?: Date;
    'actualHours'?: number;
    'actualStart'?: Date;
    'agreement'?: AgreementReference;
    'billExpenses'?: Project.BillExpensesEnum;
    'billingAmount'?: number;
    'billingAttention'?: string;
    'billingMethod': Project.BillingMethodEnum;
    'billingRateType'?: Project.BillingRateTypeEnum;
    'billingTerms'?: BillingTermsReference;
    'billProducts'?: Project.BillProductsEnum;
    'billProjectAfterClosedFlag'?: boolean;
    'billTime'?: Project.BillTimeEnum;
    'billToCompany'?: CompanyReference;
    'billToContact'?: ContactReference;
    'billToSite'?: SiteReference;
    'billUnapprovedTimeAndExpense'?: boolean;
    'board': ProjectBoardReference;
    'budgetAnalysis'?: Project.BudgetAnalysisEnum;
    'budgetFlag'?: boolean;
    'budgetHours'?: number;
    'businessUnitId'?: number;
    'company': CompanyReference;
    'contact'?: ContactReference;
    'customerPO'?: string;
    'description'?: string;
    'downpayment'?: number;
    'estimatedEnd': Date;
    'estimatedExpenseRevenue'?: number;
    'estimatedHours'?: number;
    'estimatedProductRevenue'?: number;
    'estimatedStart': Date;
    'estimatedTimeRevenue'?: number;
    'expenseApprover'?: MemberReference;
    'includeDependenciesFlag'?: boolean;
    'includeEstimatesFlag'?: boolean;
    'locationId'?: number;
    'manager'?: MemberReference;
    'name': string;
    'opportunity'?: OpportunityReference;
    'projectTemplateId'?: number;
    'restrictDownPaymentFlag'?: boolean;
    'scheduledEnd'?: Date;
    'scheduledHours'?: number;
    'scheduledStart'?: Date;
    'shipToCompany'?: CompanyReference;
    'shipToContact'?: ContactReference;
    'shipToSite'?: SiteReference;
    'site'?: SiteReference;
    'status'?: ProjectStatusReference;
    'timeApprover'?: MemberReference;
    'type'?: ProjectTypeReference;
    'doNotDisplayInPortalFlag'?: boolean;
    'billingStartDate'?: Date;
    'estimatedTimeCost'?: number;
    'estimatedExpenseCost'?: number;
    'estimatedProductCost'?: number;
    'taxCode'?: TaxCodeReference;
}
export declare namespace Project {
    type BillExpensesEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillingMethodEnum = 'ActualRates' | 'FixedFee' | 'NotToExceed' | 'OverrideRate';
    type BillingRateTypeEnum = 'WorkRole' | 'StaffMember';
    type BillProductsEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillTimeEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BudgetAnalysisEnum = 'ActualHours' | 'BillableHours';
}
export interface ProjectBoardReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectContact {
    'id'?: number;
    'projectId'?: number;
    'contact': ContactReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectNote {
    'id'?: number;
    'projectId'?: number;
    'text': string;
    'type'?: NoteTypeReference;
    'flagged'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectPhase {
    'id'?: number;
    'projectId'?: number;
    'description': string;
    'board'?: ProjectBoardReference;
    'status'?: PhaseStatusReference;
    'agreement'?: AgreementReference;
    'opportunity'?: OpportunityReference;
    'parentPhase'?: ProjectPhaseReference;
    'wbsCode'?: string;
    'billTime'?: ProjectPhase.BillTimeEnum;
    'billExpenses'?: ProjectPhase.BillExpensesEnum;
    'billProducts'?: ProjectPhase.BillProductsEnum;
    'markAsMilestoneFlag'?: boolean;
    'notes'?: string;
    'deadlineDate'?: Date;
    'billSeparatelyFlag'?: boolean;
    /**
     * billingMethod is required if the phase billSeparatelyFlag is true
     */
    'billingMethod'?: ProjectPhase.BillingMethodEnum;
    'scheduledHours'?: number;
    'scheduledStart'?: string;
    'scheduledEnd'?: string;
    'actualHours'?: number;
    'actualStart'?: string;
    'actualEnd'?: string;
    'budgetHours'?: number;
    'locationId'?: number;
    'businessUnitId'?: number;
    'hourlyRate'?: number;
    'billingStartDate'?: Date;
    /**
     * This phase can only be billed after it has been closed
     */
    'billPhaseClosedFlag'?: boolean;
    /**
     * This phase can only be billed after the project has been closed
     */
    'billProjectClosedFlag'?: boolean;
    'downpayment'?: number;
    'poNumber'?: string;
    'poAmount'?: number;
    'estimatedTimeCost'?: number;
    'estimatedExpenseCost'?: number;
    'estimatedProductCost'?: number;
    'estimatedTimeRevenue'?: number;
    'estimatedExpenseRevenue'?: number;
    'estimatedProductRevenue'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ProjectPhase {
    type BillTimeEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillExpensesEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillProductsEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillingMethodEnum = 'ActualRates' | 'FixedFee' | 'NotToExceed' | 'OverrideRate';
}
export interface ProjectPhaseReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectRoleReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectTeammember {
    'id'?: number;
    'projectId'?: number;
    'hours'?: number;
    'member': MemberReference;
    'projectRole': ProjectRoleReference;
    'workRole'?: WorkRoleReference;
    'startDate'?: Date;
    'endDate'?: Date;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ProjectTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PurchaseOrder {
    'id'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'businessUnitId'?: number;
    'cancelReason'?: string;
    'closedFlag'?: boolean;
    'customerCity'?: string;
    'customerCompany'?: CompanyReference;
    'customerContact'?: ContactReference;
    'customerCountry'?: CountryReference;
    'customerExtension'?: string;
    'customerName'?: string;
    'customerPhone'?: string;
    'customerSite'?: SiteReference;
    'customerSiteName'?: string;
    'customerState'?: string;
    'customerStreetLine1'?: string;
    'customerStreetLine2'?: string;
    'customerZip'?: string;
    'dateClosed'?: Date;
    'dropShipCustomerFlag'?: boolean;
    'enteredBy'?: string;
    'freightCost'?: number;
    'freightPackingSlip'?: string;
    'freightTaxTotal'?: number;
    'internalNotes'?: string;
    'locationId': number;
    'poDate'?: Date;
    'poNumber'?: string;
    'salesTax'?: number;
    'shipmentDate'?: Date;
    'shipmentMethod'?: ShipmentMethodReference;
    'shippingInstructions'?: string;
    'status': PurchaseOrderStatusReference;
    'subTotal'?: number;
    'taxCode'?: TaxCodeReference;
    'taxFreightFlag'?: boolean;
    'taxPoFlag'?: boolean;
    'terms': BillingTermsReference;
    'total'?: number;
    'trackingNumber'?: string;
    /**
     * Determines whether or not to update all of the shipment info for each associated line item when new shipment info is passed in
     */
    'updateShipmentInfo'?: boolean;
    /**
     * Determines whether or not to update vendor order number for each associated line item when new vendor order number is passed in
     */
    'updateVendorOrderNumber'?: boolean;
    'vendorCompany': CompanyReference;
    'vendorContact'?: ContactReference;
    'vendorInvoiceDate'?: Date;
    'vendorInvoiceNumber'?: string;
    'vendorOrderNumber'?: string;
    'vendorSite'?: SiteReference;
    'warehouse'?: WarehouseReference;
}
export interface PurchaseOrderLineItem {
    'id'?: number;
    'backorderedFlag'?: boolean;
    'canceledBy'?: string;
    'canceledFlag'?: boolean;
    'canceledReason'?: string;
    'closedFlag'?: boolean;
    'dateCanceled'?: Date;
    'dateCanceledUtc'?: Date;
    'description': string;
    'displayInternalNotesFlag'?: boolean;
    'expectedShipDate'?: Date;
    'internalNotes'?: string;
    'lineNumber': number;
    'packingSlip'?: string;
    'product': IvItemReference;
    'purchaseOrderId'?: number;
    'quantity': number;
    'receivedQuantity'?: number;
    'serialNumbers'?: string;
    'shipDate'?: Date;
    'shipmentMethod'?: ShipmentMethodReference;
    'tax'?: number;
    'trackingNumber'?: string;
    'unitCost'?: number;
    'unitOfMeasure': UnitOfMeasureReference;
    'vendorOrderNumber'?: string;
    'warehouse'?: WarehouseReference;
    'warehouseBin'?: WarehouseBinReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PurchaseOrderReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface PurchaseOrderStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface RMAAction {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface RMADisposition {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface RelationshipReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ReminderReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Report {
    'name'?: string;
}
export interface ReportDataResponse {
    'columnDefinitions'?: Array<JObject>;
    'rowValues'?: Array<JObject>;
}
export interface RequestPasswordRequest {
    'email': string;
}
export interface Role {
    'id'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SLAReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SalesProbability {
    'id'?: number;
    'probability': number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SalesTeamReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleEntry {
    'id'?: number;
    'objectId'?: number;
    'name'?: string;
    /**
     * Activity schedule requires a member
     */
    'member'?: MemberReference;
    'where'?: ServiceLocationReference;
    'dateStart'?: Date;
    'dateEnd'?: Date;
    'reminder'?: ReminderReference;
    'status'?: ScheduleStatusReference;
    'type': ScheduleTypeReference;
    'span'?: ScheduleSpanReference;
    'doneFlag'?: boolean;
    'acknowledgedFlag'?: boolean;
    'ownerFlag'?: boolean;
    'allowScheduleConflictsFlag'?: boolean;
    'addMemberToProjectFlag'?: boolean;
    'projectRoleId'?: number;
    'mobileGuid'?: Guid;
    'closeDate'?: Date;
    'hours'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleEntryReference {
    'id'?: number;
    'description'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleReminderTime {
    'id'?: number;
    /**
     * Time is calculated in minutes
     */
    'time'?: number;
    'description'?: string;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleSpanReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleStatus {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    'showAsTentativeFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleStopwatch {
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'agreement'?: AgreementReference;
    'billableOption'?: ScheduleStopwatch.BillableOptionEnum;
    'businessUnitId'?: number;
    'dateEntered'?: Date;
    'endTime'?: Date;
    'id'?: number;
    'internalNotes'?: string;
    'locationId'?: number;
    'member': MemberReference;
    'mobileGuid'?: Guid;
    'notes'?: string;
    'scheduleId': number;
    'scheduleMobileGuid'?: Guid;
    'startTime'?: Date;
    'status': ScheduleStopwatch.StatusEnum;
    'totalPauseTime'?: number;
    'workRole'?: WorkRoleReference;
    'workType'?: WorkTypeReference;
}
export declare namespace ScheduleStopwatch {
    type BillableOptionEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type StatusEnum = 'Reset' | 'Running' | 'Paused' | 'Stopped';
}
export interface ScheduleType {
    'id'?: number;
    'name': string;
    'identifier': string;
    'chargeCode'?: ChargeCodeReference;
    'where'?: ServiceLocationReference;
    'systemFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ScheduleTypeReference {
    'id'?: number;
    'identifier'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SecurityRoleReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceCodeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceItemReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceLocationReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceNote {
    'id'?: number;
    'ticketId'?: number;
    'text'?: string;
    'detailDescriptionFlag'?: boolean;
    'internalAnalysisFlag'?: boolean;
    'resolutionFlag'?: boolean;
    'member'?: MemberReference;
    'contact'?: ContactReference;
    'customerUpdatedFlag'?: boolean;
    'processNotifications'?: boolean;
    'dateCreated'?: string;
    'createdBy'?: string;
    'internalFlag'?: boolean;
    'externalFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceSignoffReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceSourceReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceStatusReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceSubTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceTeamReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ServiceTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface ShipmentMethod {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    'trackingUrl'?: string;
    'shippingType'?: ShipmentMethod.ShippingTypeEnum;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace ShipmentMethod {
    type ShippingTypeEnum = 'None' | 'FedExTwoDay' | 'FedExPriority' | 'FedExGround' | 'UpsNextDay' | 'UpsSecondDay' | 'UpsGround' | 'CourierService' | 'UspsPriority' | 'UspsExpress';
}
export interface ShipmentMethodReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SicCodeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SiteReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Skill {
    'id'?: number;
    'name': string;
    'category': SkillCategoryReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SkillCategory {
    'id'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SkillCategoryReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Source {
    'id'?: number;
    'name': string;
    'defaultFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'enteredBy'?: string;
    'dateEntered'?: Date;
}
export interface Status {
    'id'?: number;
    'name': string;
    'boardId'?: number;
    'sortOrder'?: number;
    'displayOnBoard'?: boolean;
    'inactive'?: boolean;
    'closedStatus'?: boolean;
    'timeEntryNotAllowed'?: boolean;
    'defaultFlag'?: boolean;
    'escalationStatus'?: Status.EscalationStatusEnum;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace Status {
    type EscalationStatusEnum = 'NotResponded' | 'Responded' | 'ResolutionPlan' | 'Resolved' | 'NoEscalation';
}
export interface SubCategory {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SubType {
    'id'?: number;
    'name': string;
    'inactive'?: boolean;
    'typeAssociationIds'?: Array<number>;
    'addAllTypes'?: boolean;
    'removeAllTypes'?: boolean;
    'boardId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SubtypeAssociation {
    'id'?: number;
    'type': ServiceTypeReference;
    'subType'?: ServiceSubTypeReference;
    'board'?: BoardReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SuccessResponse {
    'success'?: boolean;
    'message'?: string;
}
export interface Survey {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    'headerIncludeLogoFlag'?: boolean;
    'headerText'?: string;
    'headerTextVisibleFlag'?: boolean;
    'footerText'?: string;
    'footerTextVisibleFlag'?: boolean;
    'thankYouText'?: string;
    'notifyWho'?: GenericIdIdentifierReference;
    'notifyWhoVisibleFlag'?: boolean;
    'notifyMember'?: MemberReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SurveyQuestion {
    'id'?: number;
    'sequenceNumber'?: number;
    'type': SurveyQuestion.TypeEnum;
    'question': string;
    'options'?: Array<SurveyQuestionOption>;
    'includeFlag'?: boolean;
    'requiredFlag'?: boolean;
    'noAnswerPoints'?: number;
    'surveyId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace SurveyQuestion {
    type TypeEnum = 'OpenEnded' | 'Selection';
}
export interface SurveyQuestionOption {
    'includeFlag'?: boolean;
    'caption': string;
    'points'?: number;
}
export interface SurveyResult {
    'id'?: number;
    'ticketId': number;
    'emailAddress'?: string;
    'footerResponse'?: string;
    'contactMeFlag'?: boolean;
    'contact'?: ContactReference;
    'results'?: Array<SurveyResultDetail>;
    'totalPoints'?: number;
    'company'?: CompanyReference;
    'surveyId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface SurveyResultDetail {
    'questionId': number;
    /**
     * If question type is Selection, this should be the option array index
     */
    'answer'?: string;
}
export interface Task {
    'id'?: number;
    'ticketId'?: number;
    'notes'?: string;
    'closedFlag'?: boolean;
    'priority'?: number;
    'schedule'?: ScheduleEntryReference;
    'code'?: ServiceCodeReference;
    'resolution'?: string;
    'childScheduleAction'?: Task.ChildScheduleActionEnum;
    'childTicketId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace Task {
    type ChildScheduleActionEnum = 'Transfer' | 'Delete' | 'Done';
}
export interface TaxCode {
    'id'?: number;
    'identifier': string;
    'description': string;
    'invoiceCaption': string;
    'country'?: CountryReference;
    'effectiveDate': Date;
    'defaultFlag'?: boolean;
    'displayOnInvoiceFlag'?: boolean;
    'canadaCalculateGSTFlag'?: boolean;
    'cancelDate'?: Date;
    'levelOneRate'?: number;
    'levelOneRateType'?: TaxCode.LevelOneRateTypeEnum;
    'levelOneTaxableMax'?: number;
    'levelOneCaption'?: string;
    'levelOneTaxCodeXref'?: string;
    'levelOneAgencyXref'?: string;
    'levelOneServicesFlag'?: boolean;
    'levelOneExpensesFlag'?: boolean;
    'levelOneProductsFlag'?: boolean;
    'levelOneApplySingleUnitFlag'?: boolean;
    'levelOneApplySingleUnitMin'?: number;
    'levelOneApplySingleUnitMax'?: number;
    'levelTwoRate'?: number;
    'levelTwoRateType'?: TaxCode.LevelTwoRateTypeEnum;
    'levelTwoTaxableMax'?: number;
    'levelTwoCaption'?: string;
    'levelTwoTaxCodeXref'?: string;
    'levelTwoAgencyXref'?: string;
    'levelTwoServicesFlag'?: boolean;
    'levelTwoExpensesFlag'?: boolean;
    'levelTwoProductsFlag'?: boolean;
    'levelTwoApplySingleUnitFlag'?: boolean;
    'levelTwoApplySingleUnitMin'?: number;
    'levelTwoApplySingleUnitMax'?: number;
    'levelThreeRate'?: number;
    'levelThreeRateType'?: TaxCode.LevelThreeRateTypeEnum;
    'levelThreeTaxableMax'?: number;
    'levelThreeCaption'?: string;
    'levelThreeTaxCodeXref'?: string;
    'levelThreeAgencyXref'?: string;
    'levelThreeServicesFlag'?: boolean;
    'levelThreeExpensesFlag'?: boolean;
    'levelThreeProductsFlag'?: boolean;
    'levelThreeApplySingleUnitFlag'?: boolean;
    'levelThreeApplySingleUnitMin'?: number;
    'levelThreeApplySingleUnitMax'?: number;
    'levelFourRate'?: number;
    'levelFourRateType'?: TaxCode.LevelFourRateTypeEnum;
    'levelFourTaxableMax'?: number;
    'levelFourCaption'?: string;
    'levelFourTaxCodeXref'?: string;
    'levelFourAgencyXref'?: string;
    'levelFourServicesFlag'?: boolean;
    'levelFourExpensesFlag'?: boolean;
    'levelFourProductsFlag'?: boolean;
    'levelFourApplySingleUnitFlag'?: boolean;
    'levelFourApplySingleUnitMin'?: number;
    'levelFourApplySingleUnitMax'?: number;
    'levelFiveRate'?: number;
    'levelFiveRateType'?: TaxCode.LevelFiveRateTypeEnum;
    'levelFiveTaxableMax'?: number;
    'levelFiveCaption'?: string;
    'levelFiveTaxCodeXref'?: string;
    'levelFiveAgencyXref'?: string;
    'levelFiveServicesFlag'?: boolean;
    'levelFiveExpensesFlag'?: boolean;
    'levelFiveProductsFlag'?: boolean;
    'levelFiveApplySingleUnitFlag'?: boolean;
    'levelFiveApplySingleUnitMin'?: number;
    'levelFiveApplySingleUnitMax'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace TaxCode {
    type LevelOneRateTypeEnum = 'Amount' | 'Percent';
    type LevelTwoRateTypeEnum = 'Amount' | 'Percent';
    type LevelThreeRateTypeEnum = 'Amount' | 'Percent';
    type LevelFourRateTypeEnum = 'Amount' | 'Percent';
    type LevelFiveRateTypeEnum = 'Amount' | 'Percent';
}
/**
 * New companies will be created with the default tax code unless otherwise specified.
 */
export interface TaxCodeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface TaxCodeXRef {
    'id'?: number;
    'description': string;
    'defaultFlag'?: boolean;
    'levelOne'?: TaxCodeXRef.LevelOneEnum;
    'levelTwo'?: TaxCodeXRef.LevelTwoEnum;
    'levelThree'?: TaxCodeXRef.LevelThreeEnum;
    'levelFour'?: TaxCodeXRef.LevelFourEnum;
    'levelFive'?: TaxCodeXRef.LevelFiveEnum;
    'taxCode'?: TaxCodeReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace TaxCodeXRef {
    type LevelOneEnum = 'NonTaxable' | 'Taxable';
    type LevelTwoEnum = 'NonTaxable' | 'Taxable';
    type LevelThreeEnum = 'NonTaxable' | 'Taxable';
    type LevelFourEnum = 'NonTaxable' | 'Taxable';
    type LevelFiveEnum = 'NonTaxable' | 'Taxable';
}
export interface Team {
    'id'?: number;
    'type'?: Team.TypeEnum;
    'member'?: MemberReference;
    'salesTeam'?: SalesTeamReference;
    'commissionPercent'?: number;
    'referralFlag'?: boolean;
    'opportunityId'?: number;
    'responsibleFlag'?: boolean;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'name': string;
    'teamLeader': MemberReference;
    'members'?: Array<number>;
    'defaultFlag'?: boolean;
    'notifyOnTicketDelete'?: boolean;
    'boardId'?: number;
    'locationId'?: number;
    'businessUnitId'?: number;
}
export declare namespace Team {
    type TypeEnum = 'Individual' | 'Team';
}
export interface TeamRole {
    'id'?: number;
    'name': string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface TeamRoleReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Ticket {
    'id'?: number;
    'summary': string;
    'recordType'?: Ticket.RecordTypeEnum;
    'board'?: BoardReference;
    'status'?: ServiceStatusReference;
    'project'?: ProjectReference;
    'phase'?: ProjectPhaseReference;
    'wbsCode'?: string;
    'company': CompanyReference;
    'site'?: SiteReference;
    'siteName'?: string;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'city'?: string;
    'stateIdentifier'?: string;
    'zip'?: string;
    'country'?: CountryReference;
    'contact'?: ContactReference;
    'contactName'?: string;
    'contactPhoneNumber'?: string;
    'contactPhoneExtension'?: string;
    'contactEmailAddress'?: string;
    'type'?: ServiceTypeReference;
    'subType'?: ServiceSubTypeReference;
    'item'?: ServiceItemReference;
    'team'?: ServiceTeamReference;
    'owner'?: MemberReference;
    'priority'?: PriorityReference;
    'serviceLocation'?: ServiceLocationReference;
    'source'?: ServiceSourceReference;
    'requiredDate'?: Date;
    'budgetHours'?: number;
    'opportunity'?: OpportunityReference;
    'agreement'?: AgreementReference;
    'severity'?: Ticket.SeverityEnum;
    'impact'?: Ticket.ImpactEnum;
    'externalXRef'?: string;
    'poNumber'?: string;
    'knowledgeBaseCategoryId'?: number;
    'knowledgeBaseSubCategoryId'?: number;
    'allowAllClientsPortalView'?: boolean;
    'customerUpdatedFlag'?: boolean;
    'automaticEmailContactFlag'?: boolean;
    'automaticEmailResourceFlag'?: boolean;
    'automaticEmailCcFlag'?: boolean;
    'automaticEmailCc'?: string;
    /**
     * Only available for POST, will not be returned in the response
     */
    'initialDescription'?: string;
    /**
     * Only available for POST, will not be returned in the response
     */
    'initialInternalAnalysis'?: string;
    /**
     * Only available for POST, will not be returned in the response
     */
    'initialResolution'?: string;
    'contactEmailLookup'?: string;
    /**
     * Can be set to false to skip notification processing when adding or updating a ticket (Defaults to True)
     */
    'processNotifications'?: boolean;
    'skipCallback'?: boolean;
    'closedDate'?: string;
    'closedBy'?: string;
    'closedFlag'?: boolean;
    'dateEntered'?: string;
    'enteredBy'?: string;
    'actualHours'?: number;
    'approved'?: boolean;
    'subBillingMethod'?: Ticket.SubBillingMethodEnum;
    'subBillingAmount'?: number;
    'subDateAccepted'?: string;
    'dateResolved'?: string;
    'dateResplan'?: string;
    'dateResponded'?: string;
    'resolveMinutes'?: number;
    'resPlanMinutes'?: number;
    'respondMinutes'?: number;
    'isInSla'?: boolean;
    'knowledgeBaseLinkId'?: number;
    'resources'?: string;
    'parentTicketId'?: number;
    'hasChildTicket'?: boolean;
    'knowledgeBaseLinkType'?: Ticket.KnowledgeBaseLinkTypeEnum;
    'billTime'?: Ticket.BillTimeEnum;
    'billExpenses'?: Ticket.BillExpensesEnum;
    'billProducts'?: Ticket.BillProductsEnum;
    'predecessorType'?: Ticket.PredecessorTypeEnum;
    'predecessorId'?: number;
    'predecessorClosedFlag'?: boolean;
    'lagDays'?: number;
    'lagNonworkingDaysFlag'?: boolean;
    'estimatedStartDate'?: Date;
    'duration'?: number;
    'locationId'?: number;
    'businessUnitId'?: number;
    'mobileGuid'?: Guid;
    'sla'?: SLAReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'customFields'?: Array<CustomFieldValue>;
}
export declare namespace Ticket {
    type RecordTypeEnum = 'ServiceTicket' | 'ProjectTicket' | 'ProjectIssue';
    type SeverityEnum = 'Low' | 'Medium' | 'High';
    type ImpactEnum = 'Low' | 'Medium' | 'High';
    type SubBillingMethodEnum = 'ActualRates' | 'FixedFee' | 'NotToExceed' | 'OverrideRate';
    type KnowledgeBaseLinkTypeEnum = 'ServiceTicket' | 'ProjectTicket' | 'ProjectIssue' | 'KnowledgeBaseArticle' | 'Time' | 'Activity';
    type BillTimeEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillExpensesEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type BillProductsEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type PredecessorTypeEnum = 'Ticket' | 'Phase';
}
export interface TicketMerge {
    'mergeTicketIds': Array<number>;
    'status': ServiceStatusReference;
}
export interface TicketReference {
    'id'?: number;
    'summary'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface TicketStopwatch {
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'agreement'?: AgreementReference;
    'billableOption'?: TicketStopwatch.BillableOptionEnum;
    'businessUnitId'?: number;
    'dateEntered'?: Date;
    'endTime'?: Date;
    'id'?: number;
    'internalNotes'?: string;
    'locationId'?: number;
    'member': MemberReference;
    'mobileGuid'?: Guid;
    'notes'?: string;
    'serviceStatus'?: ServiceStatusReference;
    'startTime'?: Date;
    'status': TicketStopwatch.StatusEnum;
    'ticket': TicketReference;
    'ticketMobileGuid'?: Guid;
    'totalPauseTime'?: number;
    'workRole'?: WorkRoleReference;
    'workType'?: WorkTypeReference;
    'showNotesInDiscussionFlag'?: boolean;
    'showNotesInInternalFlag'?: boolean;
    'showNotesInResolutionFlag'?: boolean;
    'emailNotesToContactFlag'?: boolean;
    'emailNotesToResourcesFlag'?: boolean;
}
export declare namespace TicketStopwatch {
    type BillableOptionEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
    type StatusEnum = 'Reset' | 'Running' | 'Paused' | 'Stopped';
}
export interface TimeEntry {
    'id'?: number;
    /**
     * If chargeToId is not specified, we asume you enter time against the company specified
     */
    'company'?: CompanyReference;
    /**
     * If chargeToId is not specified, we asume you enter time against the company specified
     */
    'chargeToId'?: number;
    /**
     * If chargeToId is not specified, we asume you enter time against the company specified
     */
    'chargeToType'?: TimeEntry.ChargeToTypeEnum;
    'member'?: MemberReference;
    'locationId'?: number;
    'businessUnitId'?: number;
    'workType'?: WorkTypeReference;
    'workRole'?: WorkRoleReference;
    'agreement'?: AgreementReference;
    'timeStart': Date;
    'timeEnd'?: Date;
    'hoursDeduct'?: number;
    'actualHours'?: number;
    'billableOption'?: TimeEntry.BillableOptionEnum;
    'notes'?: string;
    'internalNotes'?: string;
    'addToDetailDescriptionFlag'?: boolean;
    'addToInternalAnalysisFlag'?: boolean;
    'addToResolutionFlag'?: boolean;
    /**
     * This is an action flag. To update this value use the /service/tickets endpoint automaticEmailResourceFlag field
     */
    'emailResourceFlag'?: boolean;
    /**
     * This is an action flag. To update this value use the /service/tickets endpoint automaticEmailContactFlag field
     */
    'emailContactFlag'?: boolean;
    /**
     * This is an action flag. To update this value use the /service/tickets endpoint automaticEmailCcFlag field
     */
    'emailCcFlag'?: boolean;
    /**
     * To update this value use the /service/tickets endpoint automaticEmailCc field
     */
    'emailCc'?: string;
    'hoursBilled'?: number;
    'enteredBy'?: string;
    'dateEntered'?: Date;
    'invoice'?: InvoiceReference;
    /**
     * This field may only be Updated, it is defaulted on Create
     */
    'hourlyRate'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'customFields'?: Array<CustomFieldValue>;
}
export declare namespace TimeEntry {
    type ChargeToTypeEnum = 'ServiceTicket' | 'ProjectTicket' | 'ChargeCode' | 'Activity';
    type BillableOptionEnum = 'Billable' | 'DoNotBill' | 'NoCharge' | 'NoDefault';
}
export interface TimeEntryReference {
    'id'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface TimeZoneReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface TodayPageCategory {
    'id'?: number;
    'name': string;
    'sortOrder'?: number;
    'locationId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Token {
    'publicKey'?: string;
    'privateKey'?: string;
    'expiration'?: string;
}
export interface Track {
    'id'?: number;
    'trackId': number;
    'name'?: string;
    'startDate'?: string;
    'endDate'?: string;
    'actionTaken'?: number;
    'actionRemaining'?: number;
    'startedBy'?: string;
    'company'?: CompanyReference;
    'contact'?: ContactReference;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface TrackReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface Type {
    'id'?: number;
    'name': string;
    'category'?: Type.CategoryEnum;
    'defaultFlag'?: boolean;
    'inactive'?: boolean;
    'requestForChange'?: boolean;
    'boardId'?: number;
    'locationId'?: number;
    'businessUnitId'?: number;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
    'inactiveFlag'?: boolean;
}
export declare namespace Type {
    type CategoryEnum = 'Reactive' | 'Proactive';
}
export interface TypeAssociations {
    'typeId'?: number;
    'subTypeAssociationIds'?: Array<number>;
}
export interface UnitOfMeasure {
    'id'?: number;
    'name': string;
    'inactiveFlag'?: boolean;
    'defaultFlag'?: boolean;
    'uomScheduleXref'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface UnitOfMeasureReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface UnpostedExpense {
    'id'?: number;
    'locationId'?: number;
    'departmentId'?: number;
    'company'?: CompanyReference;
    'accountNumber'?: string;
    'creditAccount'?: string;
    'expenseDetailId'?: number;
    'expenseType'?: ExpenseTypeReference;
    'classification'?: UnpostedExpense.ClassificationEnum;
    'glType'?: UnpostedExpense.GlTypeEnum;
    'member'?: MemberReference;
    'dateExpense'?: Date;
    'chargeCode'?: ChargeCodeReference;
    'chargeDescription'?: string;
    'inPolicy'?: boolean;
    'paymentMethod'?: PaymentMethodReference;
    'currency'?: CurrencyReference;
    'total'?: number;
    'billableAmount'?: number;
    'nonBillableAmount'?: number;
    'agreement'?: AgreementReference;
    'agreementAmountCovered'?: number;
    'ticket'?: TicketReference;
    'project'?: ProjectReference;
    'projectPhase'?: ProjectPhaseReference;
    'taxCode'?: TaxCodeReference;
    /**
     * Used to determine if Avalara tax is enabled.
     */
    'avalaraTaxFlag'?: boolean;
    'itemTaxableFlag'?: boolean;
    'salesTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the state level.
     */
    'stateTaxFlag'?: boolean;
    'stateTaxXref'?: string;
    'stateTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the county level.
     */
    'countyTaxFlag'?: boolean;
    'countyTaxXref'?: string;
    'countyTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the city level.
     */
    'cityTaxFlag'?: boolean;
    'cityTaxXref'?: string;
    'cityTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the country level.
     */
    'countryTaxFlag'?: boolean;
    'countryTaxXref'?: string;
    'countryTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the composite level.
     */
    'compositeTaxFlag'?: boolean;
    'compositeTaxXref'?: string;
    'compositeTaxAmount'?: number;
    'dateClosed'?: Date;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace UnpostedExpense {
    type ClassificationEnum = 'NonReimbursable' | 'Reimbursable' | 'Personal';
    type GlTypeEnum = 'AP' | 'AR' | 'EE' | 'EI' | 'EO' | 'IA' | 'IT' | 'P' | 'PF' | 'R' | 'RA' | 'RD' | 'RE' | 'RP' | 'ST' | 'SD' | 'ET' | 'RM' | 'FT' | 'PT';
}
export interface UnpostedInvoice {
    'id'?: number;
    'billingLogId'?: number;
    'locationId'?: number;
    'departmentId'?: number;
    'company'?: CompanyReference;
    'accountNumber'?: string;
    'billToCompany'?: CompanyReference;
    'billToSite'?: SiteReference;
    'shipToCompany'?: CompanyReference;
    'shipToSite'?: SiteReference;
    'invoiceNumber'?: string;
    'invoiceDate'?: Date;
    'invoiceType'?: UnpostedInvoice.InvoiceTypeEnum;
    'description'?: string;
    'billingTerms'?: BillingTermsReference;
    'dueDays'?: string;
    'dueDate'?: Date;
    'currency'?: CurrencyReference;
    'subTotal'?: number;
    'total'?: number;
    'invoiceTaxableFlag'?: boolean;
    'taxCode'?: TaxCodeReference;
    /**
     * Used to determine if Avalara tax is enabled.
     */
    'avalaraTaxFlag'?: boolean;
    'itemTaxableFlag'?: boolean;
    'salesTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the state level.
     */
    'stateTaxFlag'?: boolean;
    'stateTaxXref'?: string;
    'stateTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the county level.
     */
    'countyTaxFlag'?: boolean;
    'countyTaxXref'?: string;
    'countyTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the city level.
     */
    'cityTaxFlag'?: boolean;
    'cityTaxXref'?: string;
    'cityTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the country level.
     */
    'countryTaxFlag'?: boolean;
    'countryTaxXref'?: string;
    'countryTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the composite level.
     */
    'compositeTaxFlag'?: boolean;
    'compositeTaxXref'?: string;
    'compositeTaxAmount'?: number;
    'createdBy'?: string;
    'dateClosed'?: Date;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace UnpostedInvoice {
    type InvoiceTypeEnum = 'Agreement' | 'CreditMemo' | 'DownPayment' | 'Miscellaneous' | 'Progress' | 'Standard';
}
export interface UnpostedProcurement {
    'id'?: number;
    'description'?: string;
    'locationId'?: number;
    'departmentId'?: number;
    'procurementType'?: UnpostedProcurement.ProcurementTypeEnum;
    'purchaseOrder'?: PurchaseOrderReference;
    'purchaseDate'?: Date;
    'trackingNumber'?: string;
    'billingTerms'?: BillingTermsReference;
    'currency'?: CurrencyReference;
    'total'?: number;
    'taxCode'?: TaxCodeReference;
    /**
     * Used to determine if Avalara tax is enabled.
     */
    'avalaraTaxFlag'?: boolean;
    'itemTaxableFlag'?: boolean;
    'purchaseOrderTaxableFlag'?: boolean;
    /**
     * Set to true if transaction is taxable at the state level.
     */
    'stateTaxFlag'?: boolean;
    'stateTaxXref'?: string;
    'stateTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the county level.
     */
    'countyTaxFlag'?: boolean;
    'countyTaxXref'?: string;
    'countyTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the city level.
     */
    'cityTaxFlag'?: boolean;
    'cityTaxXref'?: string;
    'cityTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the country level.
     */
    'countryTaxFlag'?: boolean;
    'countryTaxXref'?: string;
    'countryTaxAmount'?: number;
    /**
     * Set to true if transaction is taxable at the composite level.
     */
    'compositeTaxFlag'?: boolean;
    'compositeTaxXref'?: string;
    'compositeTaxAmount'?: number;
    'taxTotal'?: number;
    'customer'?: CompanyReference;
    'vendor'?: CompanyReference;
    'vendorAccountNumber'?: string;
    'vendorInvoiceNumber'?: string;
    'vendorInvoiceDate'?: Date;
    'taxFreightFlag'?: boolean;
    'freightTaxTotal'?: number;
    'freightCost'?: number;
    'dateClosed'?: Date;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace UnpostedProcurement {
    type ProcurementTypeEnum = 'Purchase' | 'Adjustment' | 'Transfer';
}
export interface UserDefinedField {
    /**
     * ID of the custom user defined field
     */
    'id'?: number;
    /**
     * Id of the Pod where the custom field will be placed
     */
    'podId': number;
    /**
     * Field caption
     */
    'caption': string;
    /**
     * Must be between 1 and 50.  This defines the order in which the custom fields will appear
     */
    'sequenceNumber': number;
    /**
     * Help text to accompany the custom field
     */
    'helpText'?: string;
    'fieldTypeIdentifier': UserDefinedField.FieldTypeIdentifierEnum;
    /**
     * Only valid for Number or percent
     */
    'numberDecimals'?: number;
    'entryTypeIdentifier'?: UserDefinedField.EntryTypeIdentifierEnum;
    'requiredFlag'?: boolean;
    'displayOnScreenFlag'?: boolean;
    'readOnlyFlag'?: boolean;
    /**
     * Denotes that this custom field is included on a list view
     */
    'listViewFlag'?: boolean;
    /**
     * Only available with Button Field Type. Required when entryTypeIdentifier is button
     */
    'buttonUrl'?: string;
    'options'?: Array<UserDefinedFieldOption>;
    'businessUnitIds'?: Array<number>;
    'locationIds'?: Array<number>;
    'addAllBusinessUnits'?: boolean;
    'removeAllBusinessUnits'?: boolean;
    'addAllLocations'?: boolean;
    'removeAllLocations'?: boolean;
    /**
     * Date in UTC the custom field was created
     */
    'dateCreated'?: Date;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export declare namespace UserDefinedField {
    type FieldTypeIdentifierEnum = 'Text' | 'Button' | 'Date' | 'Hyperlink' | 'Checkbox' | 'Number' | 'Percent' | 'TextArea';
    type EntryTypeIdentifierEnum = 'EntryField' | 'List' | 'Option';
}
export interface UserDefinedFieldOption {
    'id'?: number;
    'optionValue': string;
    'defaultFlag'?: boolean;
    'inactiveFlag'?: boolean;
    'sortOrder'?: number;
}
export interface ValidatePortalRequest {
    'email': string;
    'password': string;
}
export interface ValidatePortalResponse {
    'success'?: boolean;
    'contactId'?: number;
}
export interface ValidationError {
    'code'?: string;
    'message'?: string;
    'resource'?: string;
    'field'?: string;
}
export interface WarehouseBinReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface WarehouseReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface WorkRoleReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
export interface WorkTypeReference {
    'id'?: number;
    'name'?: string;
    /**
     * Metadata of the entity
     */
    'info'?: Metadata;
}
