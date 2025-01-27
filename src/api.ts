/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type Any = object;

export interface CertificateHistoryResponse {
  /** @format int64 */
  certificateId: number;
  /** @format int64 */
  certificateVersion: number;
  originType: Value;
  /** @format int64 */
  originId: number;
  /** @format int64 */
  templateId: number;
  /** @format int64 */
  userId: number;
  /** @format int64 */
  companyId: number;
  /** @format date-time */
  createdDate: string;
  /** @format date-time */
  modifiedDate: string;
  /** @format date-time */
  validDate?: string;
  /** @format date-time */
  expiringDate?: string;
  /** @format date-time */
  achievementDate?: string;
  /** @format date-time */
  recertificationPeriodStart?: string;
  originTitle: Record<string, string>;
  templateTitle: Record<string, string>;
  eventType: Value;
}

export type Value = object;

export interface CertificateResponse {
  /** @format int64 */
  id: number;
  /** @format int64 */
  userId: number;
  /** @format int64 */
  companyId: number;
  /** @format int64 */
  groupId: number;
  logo?: string;
  template: ShortTemplateResponse;
  origin: CertificateOriginResponse;
  accredibleCredentialId?: string;
  /** @format date-time */
  createdDate: string;
  /** @format date-time */
  validDate?: string;
  /** @format date-time */
  expiringDate?: string;
  /** @format date-time */
  recertificationPeriodStart?: string;
  /** @format date-time */
  achievementDate: string;
  strictProgression: boolean;
  permissions: CertificatePermissions;
}

export interface ShortTemplateResponse {
  title: LocalizedString;
  description?: LocalizedString;
  /** @format date */
  validPeriod?: string;
  /** @format date */
  expiringPeriod?: string;
  openBadgesSettings: OpenBadgesSettings;
}

export interface CertificateOriginResponse {
  /** @format int64 */
  id: number;
  type: Value;
  title: LocalizedString;
}

export interface CertificatePermissions {
  view: boolean;
  delete: boolean;
  updatePermissions: boolean;
}

export type LocalizedString = object;

export interface OpenBadgesSettings {
  provider?: Value;
  description?: string;
  templateId?: string;
  /** @format int64 */
  accredibleGroupId?: number;
}

export interface GoalHistoryResponse {
  /** @format int64 */
  goalId: number;
  /** @format int64 */
  certificateId: number;
  /** @format int64 */
  certificateVersion: number;
  /** @format int64 */
  parentGoalId?: number;
  goalType: Value;
  /** @format int32 */
  indexNumber: number;
  /** @format date */
  timeLimit?: string;
  optional: boolean;
  status: Value;
  /** @format date-time */
  startedDate: string;
  /** @format date-time */
  endDate?: string;
  /** @format int32 */
  requiredCount: number;
  /** @format int32 */
  completedCount: number;
  data: Record<string, Any>;
}

export interface BulkRenewResponse {
  /** @format int64 */
  certificateCount: number;
  /** @format int64 */
  userCount: number;
}

export interface GoalsHistoryResponse {
  /** @format int64 */
  certificateVersion: number;
  history: GoalHistoryResponse[];
}

export interface TemplateLocalized {
  /** @format int64 */
  id: number;
  title: LocalizedString;
  description?: LocalizedString;
  /** @format date */
  validPeriod?: string;
  /** @format date */
  expiringPeriod?: string;
  /** @format date */
  recertificationPeriod?: string;
  recertificationMode?: Value;
  openBadgesSettings: OpenBadgesSettings;
  /** @format int64 */
  userId: number;
  /** @format int64 */
  groupId: number;
  /** @format int64 */
  companyId: number;
  /** @format int64 */
  printTemplateId?: number;
}

export interface TemplateResponse {
  /** @format int64 */
  id: number;
  title: LocalizedString;
  description?: LocalizedString;
  /** @format date */
  validPeriod?: string;
  /** @format date */
  expiringPeriod?: string;
  /** @format date */
  recertificationPeriod?: string;
  expirationDates: TemplateExpirationDateWithZone[];
  recertificationMode?: Value;
  openBadgesSettings: OpenBadgesSettings;
  /** @format int64 */
  userId: number;
  /** @format int64 */
  groupId: number;
  /** @format int64 */
  companyId: number;
  /** @format int64 */
  printTemplateId?: number;
  permissions?: TemplatePermissions;
}

export interface TemplatePermissions {
  view: boolean;
  update: boolean;
  delete: boolean;
  updatePermissions: boolean;
}

export interface TemplateExpirationDateWithZone {
  /** @format date-time */
  date: string;
  timeZone: DateTimeZone;
}

export type DateTimeZone = object;

export interface TemplateExpirationDate {
  /** @format int64 */
  id: number;
  companyId: CompanyId;
  /** @format int64 */
  templateId: number;
  /** @format date-time */
  date: string;
  timeZone: DateTimeZone;
}

export interface CompanyId {
  /** @format int64 */
  value: number;
}

export interface UserInfo {
  /** @format int64 */
  id: number;
  name: string;
  logo: string;
}

export interface PrintTemplateResponse {
  /** @format int64 */
  id: number;
  title: string;
  /** @format int64 */
  userId: number;
  /** @format int64 */
  groupId: number;
  /** @format int64 */
  companyId: number;
  permissions: PrintTemplatePermissions;
}

export interface PrintTemplatePermissions {
  view: boolean;
  update: boolean;
  delete: boolean;
  updatePermissions: boolean;
}

export interface CertificateOriginWithUsersResponse {
  type: Value;
  /** @format int64 */
  id: number;
  title: LocalizedString;
  users: UserInfo[];
}

export type InputStream = object;

export interface BadgeIssuer {
  name: string;
  url: string;
  email: string;
}

export interface Badge {
  name: string;
  description: string;
  image: string;
  criteria: string;
  issuer: string;
}

export interface BadgeResponse {
  uid: string;
  recipient: BadgeIdentity;
  badge: string;
  verify: BadgeVerification;
  issuedOn: string;
}

export interface BadgeIdentity {
  identity: string;
  type: string;
  hashed: boolean;
}

export interface BadgeVerification {
  type: string;
  url: string;
}

export interface CertificateExpiredResponse {
  certificatesInfo: CertificateExpiredInfo[];
  /** @format int64 */
  totalExpired: number;
  /** @format int64 */
  totalExpires: number;
}

export interface CertificateExpiredInfo {
  /** @format int64 */
  certificateId: number;
  certificateTitle: LocalizedString;
  certificateExpiredInFuture: boolean;
  certificateLogo: string;
  /** @format date-time */
  expiredDate: string;
  /** @format int64 */
  userId: number;
  userName: string;
  userLogo: string;
}

export interface CredlyIssueBadgeResponse {
  acceptBadgeUrl: string;
}

export interface CredlyBadge {
  id: string;
  templateId: string;
  state: string;
  public: boolean;
  locale: string;
  imageUrl: string;
  /** @format date-time */
  issuedAt: string;
  owner: CredlyBadgeOwner;
  acceptUrl?: string;
}

export interface CredlyBadgeOwner {
  id: string;
  name: string;
  url: string;
}

export interface CredlyBadgeTemplate {
  id: string;
  name: string;
  description: string;
  state: string;
  public: boolean;
  url: string;
  imageUrl: string;
  owner: CredlyBadgeOwner;
}

export interface GradingScaleValueProperties {
  title: string;
  description: string;
  /** @format int64 */
  base?: number;
  /** @format float */
  gpaValue?: number;
}

export interface GradingScaleValue {
  /** @format int64 */
  id: number;
  /** @format int64 */
  scaleId: number;
  title: string;
  description: string;
  /** @format int64 */
  base?: number;
  /** @format float */
  gpaValue?: number;
}

export interface GradingScaleProperties {
  title: string;
  description?: string;
  isDefault: boolean;
  showPassText: boolean;
}

export interface GradingScale {
  clusterMappingId: ClusterMappingId;
  /** @format int64 */
  id: number;
  /** @format int64 */
  companyId: number;
  title: string;
  description?: string;
  isDefault: boolean;
  showPassText: boolean;
}

export interface ClusterMappingId {
  /** @format byte */
  value: string;
}

export interface Map {
  version: string;
  "api-version": string;
}

export interface RecommendationsMap {
  cluster: string;
  elasticsearch: string;
  consumers: string;
  reindexStatus: string;
}

export interface Result {
  /** @format int32 */
  total: number;
  items: Response[];
}

export interface Response {
  id: string;
  name: string;
  image?: string;
  link?: string;
  rating?: ResponseEntityRating;
  popularity?: ResponseEntityPopularity;
  entityType: string;
}

export interface ResponseEntityRating {
  /** @format int32 */
  votesCount: number;
  /** @format double */
  avg: number;
  /** @format double */
  score?: number;
}

export interface ResponseEntityPopularity {
  /** @format int32 */
  overall: number;
}

export enum Condition {
  And = "and",
  Or = "or",
}

export enum UserHistoryAccounting {
  Any = "any",
  Ignore = "ignore",
  Onlycompleted = "onlycompleted",
}

export enum ConventionalContentType {
  Course = "course",
  Lesson = "lesson",
  LearningPath = "learning-path",
  LinkedInCourse = "linked-in-course",
  TrainingEvent = "training-event",
}

export type Map1 = object;

export enum PopularityType {
  Overall = "overall",
  Weekly = "weekly",
  Monthly = "monthly",
}

export type LearningPathResponse = object;

export interface LPForMemberResponse {
  /** @format int64 */
  id: number;
  activated: boolean;
  /** @format int64 */
  currentVersionId?: number;
  /** @format int64 */
  certificateTemplateId?: number;
  published: boolean;
  title: LocalizedString;
  description?: LocalizedString;
  logoUrl?: string;
  /** @format int64 */
  courseId: number;
  strictProgression: boolean;
  requiredReview: boolean;
  hasLearningPoints: boolean;
  /** @format date-time */
  createdDate: string;
  /** @format date-time */
  modifiedDate: string;
  languages: LPLanguage[];
  /** @format int32 */
  userMembersCount: number;
  /** @format int32 */
  goalsCount: number;
  hasDraft: boolean;
  /** @format int32 */
  estimatedDuration?: number;
  status?: Value;
  /** @format date-time */
  statusModifiedDate?: string;
  /** @format double */
  progress?: number;
  mandatory: boolean;
  /** @format int64 */
  statusVersionId?: number;
  permissions: LPPermissions;
  categories?: Category[];
}

export interface LPResponse {
  /** @format int64 */
  id: number;
  activated: boolean;
  /** @format int64 */
  currentVersionId?: number;
  hasDraft: boolean;
  published: boolean;
  title: LocalizedString;
  description?: LocalizedString;
  logoUrl?: string;
  /** @format int64 */
  courseId: number;
  strictProgression: boolean;
  requiredReview: boolean;
  hasLearningPoints: boolean;
  /** @format date-time */
  createdDate: string;
  /** @format date-time */
  modifiedDate: string;
  permissions: LPPermissions;
  categories?: Category[];
  /** @format int64 */
  certificateTemplateId?: number;
  /** @format int32 */
  estimatedDuration?: number;
  languages: LPLanguage[];
}

export interface LPLanguage {
  locale: string;
  isDefault: boolean;
}

export interface LPPermissions {
  view: boolean;
  update: boolean;
  delete: boolean;
  publish: boolean;
  viewMembers: boolean;
  addMembers: boolean;
  deleteMembers: boolean;
  join: boolean;
  updatePermissions: boolean;
}

export interface Category {
  /** @format int64 */
  id: number;
  /** @format int64 */
  vocabularyId: number;
}

export type GoalResponse = object;

export interface UserCompetenceResponse {
  /** @format int64 */
  skillId: number;
  compliant: boolean;
}

export interface UserMemberResponse {
  /** @format int64 */
  id: number;
  name: string;
  logo: string;
  mandatory: boolean;
  groups: IdAndName[];
  roles: IdAndName[];
  organizations: IdAndName[];
  membershipInfo: MemberWithName[];
  status?: Value;
  /** @format date-time */
  statusDate?: string;
  /** @format double */
  progress?: number;
  /** @format int64 */
  statusVersionId?: number;
  comment?: string;
}

export interface IdAndName {
  /** @format int64 */
  id: number;
  name: string;
}

export interface MemberWithName {
  /** @format int64 */
  id: number;
  tpe: MemberType;
  /** @format int64 */
  entityId: number;
  name: string;
  mandatory: boolean;
}

export type MemberType = object;

export interface AudienceMemberResponse {
  id: string;
  friendlyId: string;
  name: string;
  /** @format int64 */
  courseId?: number;
  userPortraits: string[];
  joined: boolean;
  mandatory: boolean;
}

export interface UserGoalStatus {
  /** @format int64 */
  userId: number;
  /** @format int64 */
  goalId: number;
  status: Value;
  /** @format date-time */
  startedDate: string;
  /** @format date-time */
  modifiedDate: string;
  /** @format int32 */
  requiredCount: number;
  /** @format int32 */
  completedCount: number;
  /** @format date-time */
  endDate?: string;
}

export interface UserLPStatusResponse {
  /** @format int64 */
  userId: number;
  /** @format int64 */
  learningPathId: number;
  /** @format int64 */
  versionId: number;
  status: Value;
  /** @format date-time */
  startedDate: string;
  /** @format date-time */
  modifiedDate: string;
  /** @format double */
  progress: number;
  /** @format int64 */
  trainerId?: number;
  comment?: string;
  /** @format double */
  grade?: number;
}

export interface GroupMemberResponse {
  /** @format int64 */
  id: number;
  name: string;
  /** @format int32 */
  userCount: number;
  userPortraits: string[];
  mandatory: boolean;
}

export interface RoleMemberResponse {
  /** @format int64 */
  id: number;
  name: string;
  /** @format int32 */
  userCount: number;
  userPortraits: string[];
  joined: boolean;
  mandatory: boolean;
}

export interface LPUserStatusHistoryResponse {
  /** @format int64 */
  userId: number;
  /** @format int64 */
  modifiedBy?: number;
  /** @format int64 */
  learningPathId: number;
  /** @format int64 */
  versionId: number;
  status?: Value;
  /** @format double */
  progress?: number;
  eventType: Value;
  /** @format date-time */
  modifiedDate: string;
  comment?: string;
  /** @format float */
  grade?: number;
}

export interface GoalsGroupResponse {
  /** @format int64 */
  id: number;
  /** @format int64 */
  groupId?: number;
  /** @format int32 */
  indexNumber: number;
  /** @format date */
  timeLimit?: string;
  /** @format date-time */
  availableFrom?: string;
  /** @format date-time */
  availableTo?: string;
  optional: boolean;
  /** @format date-time */
  modifiedDate: string;
  title: string;
  /** @format int32 */
  count?: number;
  goalType: string;
}

export interface GroupResponse {
  /** @format int64 */
  id: number;
  name: string;
  /** @format int32 */
  userCount: number;
  userPortraits: string[];
  joined: boolean;
}

export interface UserResponse {
  /** @format int64 */
  id: number;
  name: string;
  email: string;
  picture: string;
  pageUrl: string;
}

export interface Competence {
  /** @format int64 */
  skillId: number;
  skillName: string;
  /** @format int64 */
  levelId: number;
  levelName: string;
}

export interface LPWithStatisticsResponse {
  /** @format int64 */
  id: number;
  title: string;
  logoUrl?: string;
  statusToCount: Record<string, number>;
  /** @format int64 */
  courseId: number;
}

export interface UsersWithStatisticsResponse {
  /** @format int64 */
  id: number;
  name: string;
  logo: string;
  status?: Value;
  /** @format date-time */
  statusDate?: string;
  /** @format double */
  progress?: number;
  statusToCount: Record<string, number>;
}

export interface TotalResponse {
  /** @format int64 */
  id: number;
  total: Record<string, number>;
}

export interface UserStatusResponse {
  /** @format int64 */
  id: number;
  user: UserSummary;
  organizations: string[];
  certificates: UserCertificateStatusResponse[];
}

export interface UserSummary {
  /** @format int64 */
  id: number;
  name: string;
  picture: string;
}

export interface UserCertificateStatusResponse {
  /** @format int64 */
  certificateId: number;
  /** @format int64 */
  userId: number;
  /** @format int32 */
  status: number;
}

export interface UserGoalStatusResponse {
  /** @format int64 */
  certificateId: number;
  /** @format int64 */
  userId: number;
  goals: GoalStatusResponse[];
}

export interface GoalStatusResponse {
  /** @format int64 */
  goalId: number;
  /** @format date-time */
  date: string;
  /** @format int32 */
  status: number;
}

export interface LearningPathGoalsResponse {
  title: LocalizedString;
  /** @format int64 */
  id: number;
  /** @format date-time */
  creationDate: string;
  goals: BaseGoalPathsResponse[];
}

export type BaseGoalPathsResponse = object;

export type UserStatus = object;

export interface MemberPermissions {
  view: boolean;
  update: boolean;
  delete: boolean;
  isResponsibleFor: boolean;
}

export interface LRActivityType {
  activityName: string;
  title: string;
}

export interface Form {
  formId: FormId;
  title: string;
  courseId: CourseId;
}

export interface FormId {
  /** @format int64 */
  value: number;
}

export interface CourseId {
  /** @format int64 */
  value: number;
}

export interface LrsSettingsResponse {
  valamisContextPath: string;
  packageContextPath: string;
  endpoint: string;
  auth: string;
  agent: LrsAgent;
}

export interface LrsAgent {
  account: LrsAccount;
  objectType: string;
}

export type LrsAccount = object;

export interface EcommerceResponse {
  billable: boolean;
  noPriceForCountry: boolean;
  purchased: boolean;
  invited: boolean;
  carted: boolean;
  waited: boolean;
}

export interface RecentLesson {
  /** @format int64 */
  lessonId: number;
  lessonTitle: string;
  /** @format date-time */
  throughDate: string;
  courseTitle: string;
  courseUrl: string;
}

export interface LessonStatus {
  status: string;
}

export interface UserLessonResult {
  /** @format int64 */
  lessonId: number;
  /** @format int64 */
  userId: number;
  /** @format date-time */
  lastAttemptDate: string;
  status: string;
  /** @format double */
  score: number;
}

export interface Lesson {
  /** @format int64 */
  id: number;
  lessonType: string;
  title: string;
  description: string;
  /** @format int64 */
  courseId: number;
  /** @format date-time */
  creationDate: string;
  /** @format date-time */
  beginDate?: string;
  /** @format date-time */
  endDate?: string;
  requiredReview: boolean;
  /** @format double */
  scoreLimit: number;
  /** @format int32 */
  estimatedDuration?: number;
  link: string;
}

export interface LessonActivityId {
  activityId: string;
}

export interface LessonPermissions {
  view: boolean;
  update: boolean;
  delete: boolean;
  permissions: boolean;
  share: boolean;
  rate: boolean;
  export: boolean;
  download: boolean;
}

export interface Rating {
  /** @format double */
  score: number;
  /** @format double */
  average: number;
  /** @format int32 */
  total: number;
}

export type CourseDTO = object;

export type CoursePackDTO = object;

export type IntegrationsResult = object;

export type Unit = object;

export type ClassifierDTO = object;

export type CredentialValidationDTO = object;

export type StatusResponseDTO = object;

export type IntegrationTypes = object;

export interface CoursesUserResponse {
  /** @format int64 */
  id: number;
  name: string;
  picture: string;
  organizations: string[];
  groups: string[];
  roles: string[];
  prerequisitesCompleted?: boolean;
  joined: boolean;
  inheritedMembership: boolean;
}

export interface CourseTheme {
  id: string;
  name: string;
  device: string;
  hasColorSchemes: boolean;
  isChild: boolean;
}

export interface RoleInfo {
  /** @format int64 */
  id: number;
  name: string;
  description: string;
}

export interface UserGroupInfo {
  /** @format int64 */
  id: number;
  name: string;
  /** @format int64 */
  userSize: number;
  portraits: string[];
  joined: boolean;
}

export interface ValamisTag {
  /** @format int64 */
  id: number;
  text: string;
}

export interface CourseResponse {
  /** @format int64 */
  id: number;
  /** @format int64 */
  parentId?: number;
  title: string;
  url: string;
  courseType?: CoursesValue;
  description: string;
  membershipType: string;
  isActive: boolean;
  restrictedMembership: boolean;
  /** @format int64 */
  organizationId: number;
  rating?: Rating;
  hasLogo: boolean;
  isMember: boolean;
  hasRequestedMembership: boolean;
  /** @format int32 */
  membershipRequestsCount?: number;
  siteRoles: SiteRole[];
  logoUrl: string;
  friendlyUrl: string;
  longDescription?: string;
  longDescriptionPrivate?: string;
  /** @format int32 */
  userLimit?: number;
  /** @format date-time */
  beginDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format int32 */
  estimatedDuration?: number;
  /** @format int32 */
  userCount?: number;
  theme?: CourseTheme;
  privateTheme?: CourseTheme;
  prerequisitesCompleted?: boolean;
  isAvailableNow?: boolean;
  isQueueMember?: boolean;
  /** @format int32 */
  queueCount?: number;
  certificates: CoursesCertificateResponse[];
  permissions?: CoursePermissionsModel;
  isGuestSite: boolean;
  isCompanySite: boolean;
  isInstructor: boolean;
  canGrade: boolean;
  /** @format int64 */
  templateId?: number;
  /** @format int64 */
  privateTemplateId?: number;
  /** @format int32 */
  publicPagesCount: number;
  /** @format int32 */
  privatePagesCount: number;
  isPublicTemplatePropagationEnabled: boolean;
  isPrivateTemplatePropagationEnabled: boolean;
}

export interface CoursesValue {
  q: object;
}

export interface SiteRole {
  /** @format int64 */
  id: number;
  name: string;
  description: string;
}

export interface CoursesCertificateResponse {
  /** @format int64 */
  id: number;
  title: Record<string, string>;
  isActive: boolean;
  logo: string;
  description: Record<string, string>;
  status?: string;
}

export interface CoursePermissionsModel {
  view: boolean;
  update: boolean;
  delete: boolean;
  permissions: boolean;
  viewMembers: boolean;
  assignMembers: boolean;
  assignUserRoles: boolean;
  addSubSite: boolean;
  canGrade: boolean;
}

export type A = object;

export interface CourseTemplate {
  /** @format int64 */
  id: number;
  name: string;
}

export interface CourseCreditResponse {
  /** @format int64 */
  value: number;
}

export interface CourseUserGroupResponse {
  name: string;
}

export interface CourseKeyword {
  /** @format int64 */
  id: number;
  name: string;
}

export interface LearningPathPrerequisiteResponse {
  /** @format int64 */
  learningPathId: number;
}

export interface UserLPComplianceResponse {
  /** @format int64 */
  learningPathId: number;
  compliant: boolean;
}

export interface CourseGrade {
  /** @format int64 */
  courseId: number;
  /** @format int64 */
  userId: number;
  /** @format float */
  grade?: number;
  /** @format date-time */
  date: string;
  comment?: string;
}

export interface CategoryResponse {
  /** @format int64 */
  id: number;
  title: string;
  /** @format int64 */
  vocabularyId: number;
}

export interface CourseInfoResponse {
  /** @format int64 */
  id: number;
  title: string;
  courseType?: CoursesValue;
  description: string;
  isActive: boolean;
  /** @format date-time */
  beginDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format int32 */
  estimatedDuration?: number;
  membershipType?: CoursesValue;
  /** @format int64 */
  organizationId: number;
  friendlyUrl: string;
  url: string;
}

export interface ParticipationInfo {
  /** @format int32 */
  userCount?: number;
  /** @format int32 */
  requestCount: number;
  /** @format int32 */
  userLimit?: number;
  /** @format int32 */
  queueCount: number;
}

export interface UserParticipationInfo {
  isCourseMember: boolean;
  hasRequestedMembership: boolean;
  isQueueMember: boolean;
  membershipRequestAccepted?: boolean;
}

export interface CourseDescription {
  summary: string;
  descriptionPublic?: string;
  descriptionPrivate?: string;
}

export interface CourseUsersStatisticResponse {
  course: ShortCourseInfo;
  /** @format int32 */
  membersCount: number;
  /** @format int32 */
  completedCount: number;
  /** @format int32 */
  lessonsCount: number;
}

export interface ShortCourseInfo {
  /** @format int64 */
  id: number;
  title: string;
}

export interface CompletionCriteria {
  manualApprovalRequired: boolean;
  lessonsRequired: boolean;
  learningPathsRequired: boolean;
}

export interface CoursePDHoursResponse {
  /** @format date-time */
  total: string;
  /** @format date-time */
  specific: string;
}

export interface WebinarInfoResponse {
  /** @format int64 */
  eventId: number;
  webinarPlatform?: string;
  webinarId?: string;
  url?: string;
}

export interface TrainingEventWithInfo {
  event: TrainingEventResponse;
  additionalInfo?: EventMemberInfo;
  permissions?: EventPermissions;
  relatedLessons: RelatedLessonResponse[];
}

export interface TrainingEventResponse {
  /** @format int64 */
  id: number;
  /** @format int64 */
  createdBy: number;
  /** @format int64 */
  calendarId: number;
  /** @format int64 */
  groupId: number;
  title: string;
  logo?: string;
  description?: string;
  location?: string;
  classroom?: string;
  /** @format date-time */
  startTime: string;
  /** @format date-time */
  endTime: string;
  enrollmentType: EnrollmentType;
  /** @format int32 */
  participantLimit?: number;
  referenceNumber?: string;
  manualGoalAchievement: boolean;
  /** @format int32 */
  daysForRemind: number;
  /** @format int64 */
  parentId: number;
  language?: string;
  country?: string;
  city?: string;
  webinarUrl?: string;
  webinarPlatform?: string;
  eventType: EventType;
  /** @format int32 */
  waitListLimit?: number;
  hasSessions: boolean;
  /** @format int64 */
  userCalendarId?: number;
  timeZoneId: string;
  /** @format int64 */
  templateId?: number;
  comment?: string;
  /** @format date */
  creationDate: string;
  /** @format date-time */
  deadline?: string;
  /** @format int32 */
  deadlineDays?: number;
  /** @format int32 */
  estimatedDuration?: number;
  hasLearningPoints: boolean;
}

export interface EventMemberInfo {
  /** @format int32 */
  participantNumber: number;
  isMember: boolean;
  isMemberOfSessions?: boolean;
  isTrainer: boolean;
  firstOtherTrainer?: string;
  /** @format int32 */
  otherTrainersCount: number;
  isMembershipRequested: boolean;
  /** @format int32 */
  membershipRequestsCount: number;
}

export interface EventPermissions {
  manage: boolean;
  manageMembers: boolean;
  updatePermissions: boolean;
  enroll: boolean;
  markAttendance: boolean;
}

export interface RelatedLessonResponse {
  /** @format int64 */
  id: number;
  title: string;
  isHidden: boolean;
}

export type EnrollmentType = object;

export type EventType = object;

export interface EventShortInfo {
  /** @format int64 */
  id: number;
  /** @format int64 */
  calendarId: number;
  calendarTitle: string;
  title: string;
  /** @format date-time */
  startTime: string;
  /** @format date-time */
  endTime: string;
  /** @format int64 */
  sessionId?: number;
  eventType?: EventType;
}

export interface TrainingEventsUserResponse {
  /** @format int64 */
  id: number;
  name: string;
  email: string;
  picture: string;
  pageUrl: string;
  roles: string[];
  organizations: string[];
  userGroups: string[];
}

export interface MembersConfirmationResponse {
  records: MemberResponse[];
  /** @format int64 */
  total: number;
}

export type MemberResponse = object;

export interface AssignmentResponse {
  /** @format int64 */
  id: number;
  title: string;
  body: string;
  /** @format date-time */
  deadline?: string;
  status: Value;
  /** @format int64 */
  groupId: number;
  /** @format int64 */
  companyId: number;
  /** @format int64 */
  userId: number;
  type: Value;
  allowGroupCreation: boolean;
  allowSubmissionAfterDeadline: boolean;
  /** @format date-time */
  availabilityDate?: string;
}

export interface AssignmentsCategory {
  /** @format int64 */
  id: number;
  title: string;
}

export interface MessageResponse {
  /** @format int64 */
  entryId: number;
  /** @format date-time */
  date: string;
  message: string;
  user: AssignmentsUserInfo;
}

export interface AssignmentsUserInfo {
  id: UserId;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  profileUrl: string;
  picture: string;
  organizations: string[];
}

export interface UserId {
  /** @format int64 */
  value: number;
}

export interface SubmissionResponse {
  /** @format int64 */
  id: number;
  /** @format int64 */
  assignmentId: number;
  /** @format int64 */
  userId: number;
  body?: string;
  /** @format date-time */
  createDate: string;
  status: Value;
}

export interface EvaluationResponse {
  /** @format int64 */
  id: number;
  /** @format int64 */
  userId: number;
  /** @format int64 */
  submissionId: number;
  submissionStatus: Value;
  /** @format float */
  grade: number;
  message?: string;
  /** @format date-time */
  date: string;
  user: AssignmentsUserInfo;
}

export interface Attachment {
  id: AttachmentId;
  /** @format int64 */
  entryId: number;
  type: Value;
  name: string;
  mimeType: string;
  /** @format int64 */
  size: number;
  userId: UserId;
  companyId: CompanyId;
}

export interface AttachmentId {
  /** @format int64 */
  value: number;
}

export interface UserInfoResponse {
  /** @format int64 */
  id: number;
  name: string;
  profileUrl: string;
  picture: string;
  organizations: string[];
}

export interface AssignmentGroupSearchResult {
  /** @format int64 */
  id: number;
  /** @format int64 */
  assignmentId: number;
  title: string;
  /** @format int64 */
  membersCount: number;
  status: Value;
  /** @format float */
  grade?: number;
  /** @format date-time */
  gradedSubmissionDate?: string;
}

/** Can be any value - string, number, boolean, array or object */
export type AnyValue = any;

export interface ClientCredentials {
  grant_type?: string;
  client_id?: string;
  client_secret?: string;
}

export interface Token {
  access_token?: string;
  token_type?: string;
  expires?: number;
}

/** See section 6 of RFC 7643 */
export interface ResourceType {
  schemas?: string[];
  id?: string;
  meta?: {
    resourceType?: string;
    location?: string;
  };
  name?: string;
  description?: string;
  endpoint?: string;
  schema?: string;
  schemaExtensions?: {
    schema?: string;
    required?: boolean;
  };
}

/** A recursive definition. Note how property subAttributes reuses SchemaAttribute for its definition */
export interface SchemaAttribute {
  name?: string;
  type?: string;
  subAttributes?: SchemaAttribute[];
  multiValued?: boolean;
  description?: string;
  required?: string;
  canonicalValues?: string[];
  caseExact?: boolean;
  mutability?: string;
  returned?: string;
  uniqueness?: string;
  referenceTypes?: string[];
}

export interface SchemaResource {
  schemas?: string[];
  id?: string;
  meta?: {
    resourceType?: string;
    location?: string;
  };
  name?: string;
  description?: string;
  attributes?: SchemaAttribute[];
}

/** See section 3.5.2 of RFC 7644 */
export interface PatchOperation {
  /** The kind of operation to perform */
  op: "add" | "remove" | "replace";
  /** Required when op is remove, optional otherwise */
  path?: string;
  /** Can be any value - string, number, boolean, array or object */
  value?: AnyValue;
}

/** Stores one or more patch operations */
export interface PatchRequest {
  schemas?: string[];
  Operations: PatchOperation[];
}

/** Descriptive information about a resource. See section 3.1 of RFC 7643 */
export interface Meta {
  resourceType?: string;
  created?: string;
  lastModified?: string;
  location?: string;
}

/** Represents a member of a Group resource */
export interface MemberOrganizations {
  /** URI of the SCIM resource */
  $ref?: string;
  /** The type of member. Can be "User", "Organization" or "Group" */
  type?: string;
  /** A human readable name, primarily used for display purposes */
  display?: string;
  /** Identifier (ID) of the resource */
  value?: string;
  /** Only type of 'User' member can have roles */
  roles?: Role[];
}

/** Represents a member of a Group resource */
export interface MemberGroups {
  /** URI of the SCIM resource */
  $ref?: string;
  /** The type of member. Can be "User", "Organization" or "Group" */
  type?: string;
  /** A human readable name, primarily used for display purposes */
  display?: string;
  /** Identifier (ID) of the resource */
  value?: string;
}

/** See section 4.1.1 of RFC 7643 */
export interface Name {
  /** lastName */
  familyName?: string;
  /** firstName */
  givenName?: string;
  /** middleName */
  middleName?: string;
  /** Full name. (generated based on other name fields) */
  formatted?: string;
}

/** See section 4.1.2 of RFC 7643. PUT & PATCH only replaces primary email */
export interface Email {
  /**
   * Email addresses for the user.
   * @example "test@valamis.com"
   */
  value?: string;
  /** If true -> default email, else -> additional emails list. */
  primary?: boolean;
}

/** See section 4.1.2 of RFC 7643. NOT YET SUPPORTED IN PUT */
export interface PhoneNumber {
  /**
   * Phone number of the User.
   * @example "+1-555-555-8377"
   */
  value?: string;
  /**
   * A label indicating the attribute's function, e.g., 'work', 'home', 'mobile'.
   * @example "work"
   */
  type?: string;
  /** Denotes if this is the preferred phone number among others, if any. NOT SUPPORTED IN GET */
  primary?: boolean;
}

/** See section 4.1.2 of RFC 7643. 'primary' ATTRIBUTE NOT YET SUPPORTED IN PUT. */
export interface Address {
  /**
   * The full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information.
   * @example "56 Acacia Avenue"
   */
  streetAddress?: string;
  /** City or locality of the address */
  locality?: string;
  /** State or region of the address */
  region?: string;
  /** The zip code or postal code component. */
  postalCode?: string;
  /**
   * Country expressed in ISO 3166-1 "alpha-2" code format
   * @example "UK"
   */
  country?: string;
  primary?: boolean;
}

/** See section 4.1.2 of RFC 7643 */
export interface Group {
  /**
   * Group identifier in UUID format
   * @example "1e46e83a-8ba7-44d7-7322-cb21cc3f9ba4"
   */
  value?: string;
  /** URI associated to the group */
  $ref?: string;
  /** @example "Example Group 1" */
  display: string;
  type?: string;
}

/** See section 4.1.2 of RFC 7643 */
export interface Role {
  value?: string;
  /** @example "Project manager" */
  display?: string;
  type?: string;
  /** role custom field 'primary' */
  primary?: boolean;
}

export interface BaseResource {
  /** URIs that are used to indicate the namespaces of the SCIM schemas that define the attributes present in the current structure */
  schemas?: string[];
  /** A unique identifier for a SCIM resource. See section 3.1 of RFC 7643 */
  id?: string;
  /** Descriptive information about a resource. See section 3.1 of RFC 7643 */
  meta?: Meta;
}

/** Represents a group resource. See section 4.2 of RFC 7643 */
export type GroupResponseResource = BaseResource &
  object & {
    /** Group name suitable for display to end-users */
    displayName?: string;
    members?: MemberGroups[];
  };

/** Represents a group request resource. */
export type GroupRequestResource = {
  /** Group name suitable for display to end-users */
  displayName: string;
  /** Member type can be only 'User' */
  members?: MemberGroups[];
};

export interface UserCredentialsResource {
  /** user email */
  email: string;
  /** user password */
  password: string;
}

/** Represents a organization resource. */
export type OrganizationRequestResource = BaseResource &
  object & {
    /** Group name suitable for display to end-users */
    displayName: string;
    /** UUID of the parent organization */
    parent?: string;
    members?: MemberOrganizations[];
  };

/** Represents a organization response. */
export type OrganizationResponseResource = BaseResource &
  object & {
    /** Group name suitable for display to end-users */
    displayName: string;
    /** UUID of the parent organization */
    parent?: string;
    members?: object;
  };

/** Represents a organization resource in valamis user schema. */
export type OrganizationResourceInValamisUser = object & {
  /** Organization objects UUID */
  id?: string;
  /** The URI corresponding to a SCIM resource that is the parent of this User */
  $ref?: string;
  /** Organization objects displayName */
  displayName?: string;
  /** Organization resource returned in valamisUser schema */
  parent?: ValamisUserOrganizationParentResource;
};

/** Represents a user resource. See section 4.1 of RFC 7643 */
export type UserResourceResponse = BaseResource &
  object & {
    /** Identifier of the resource useful from the perspective of the provisioning client. See section 3.1 of RFC 7643 */
    externalId?: string;
    userName?: string;
    /** See section 4.1.1 of RFC 7643 */
    name?: Name;
    /** Name of the user suitable for display to end-users */
    displayName?: string;
    /** @example "Vice President" */
    title?: string;
    /** @example "en_US" */
    preferredLanguage?: string;
    /** @example "America/Los_Angeles" */
    timezone?: string;
    active?: boolean;
    emails?: Email[];
    phoneNumbers?: PhoneNumber[];
    addresses?: Address[];
    groups?: Group[];
    roles?: Role[];
    /** Extension to user resource */
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?: {
      costCenter?: string;
      /** Object that contains manager information of the user */
      manager?: ManagerResource;
      organization?: string;
      division?: string;
      department?: string;
    };
    /** Extension to user resource */
    "urn:ietf:params:scim:schemas:extension:valamis:2.0:User"?: {
      /** Unique user id number, when combined with companyId */
      userId?: number;
      /** Date of birth in dateTime format */
      dateOfBirth?: string;
      /** Gender of the user (female or male) */
      gender?: string;
      /** The company id this user belongs to */
      companyId?: number;
      /** Last login date of user */
      lastLoginDate?: string;
      custom?: CustomFieldsResource[];
      categories?: CategoryFieldsResource[];
      organizations?: OrganizationResourceInValamisUser[];
    };
  };

/** Request body of the user. */
export type UserResourceRequest = {
  /** Custom identifier: uuid or emailAddress or screenName (depends on SCIM config). */
  externalId?: string;
  /** emailAddress or nothing */
  userName: string;
  /** See section 4.1.1 of RFC 7643 */
  name?: Name;
  /**
   * The user's title, such as 'Vice President'.
   * @example "Vice President"
   */
  title?: string;
  /**
   * Indicates the User's preferred written or spoken language. 'en_US' would specify the language English and country US. If set, will overwrite locale -field
   * @example "en_US"
   */
  preferredLanguage?: string;
  /**
   * Used for purposes of localizing items such as currency and dates
   * @example "en-US"
   */
  locale?: string;
  /**
   * The User's time zone in the 'Olson' time zone database format, e.g., 'America/Los_Angeles'.
   * @example "America/Los_Angeles"
   */
  timezone?: string;
  /** A Boolean value indicating the User's administrative status. Defaults true */
  active?: boolean;
  /** PUT & PATCH only replaces primary email */
  emails?: Email[];
  /** NOT YET SUPPORTED IN PUT */
  phoneNumbers?: PhoneNumber[];
  /** 'addresses.primary' ATTRIBUTE NOT YET SUPPORTED IN PUT. */
  addresses?: Address[];
  /** A list of roles for the User that collectively represent who the User is, e.g., 'Student', 'Faculty'. */
  roles?: Role[];
  /** Extension to user resource */
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?: {
    /** costCenter attribute. If used, a new custom field is created for the user and this value is set to it. */
    costCenter?: string;
    /** Object that contains manager information of the user */
    manager?: ManagerResourceRequest;
    /** Name of organization */
    organization?: string;
    /** Name of division */
    division?: string;
    /** Name of department */
    department?: string;
  };
  /** Extension to user resource */
  "urn:ietf:params:scim:schemas:extension:valamis:2.0:User"?: {
    /**
     * Date of birth in dateTime format
     * @example "2019-07-21T17:00:00"
     */
    dateOfBirth?: string;
    /** Gender of the user (female or male) */
    gender?: string;
    custom?: CustomFieldsResource[];
    categories?: CategoryFieldsResource[];
  };
};

/** Custom manager resource */
export type ManagerResource = object & {
  /** Identifier of the manager user. Depends on SCIM configurations, but can be for example UUID or screenName */
  value: string;
  $ref?: string;
  displayName?: string;
};

/** Custom manager resource */
export type ManagerResourceRequest = object & {
  /** Identifier of the manager user. Depends on SCIM configurations, but can be for example UUID or screenName */
  value: string;
};

/** Representation of custom field resource */
export type CustomFieldsResource = object & {
  /** The custom field name */
  key?: string;
  /** The value of the custom field */
  value?: string;
};

/** Category resource */
export type CategoryFieldsResource = object & {
  /** The value of the vocabulary field */
  vocabulary?: string;
  /** The value of the category field */
  category?: string;
};

/** Organization resource returned in valamisUser schema */
export type ValamisUserOrganizationParentResource = object & {
  /** Organization objects UUID */
  id?: string;
  /** Organization objects displayName */
  displayName?: string;
  /** The URI corresponding to a SCIM resource */
  $ref?: string;
};

/** Default list response */
export type ListResponseSchema = object & {
  /**
   * Total results
   * @format int64
   */
  totalResults?: number;
  /**
   * Index of the first resource
   * @format int64
   */
  startIndex?: number;
  /**
   * Count of resources per page
   * @format int64
   */
  itemsPerPage?: number;
  /**
   * Count of resources fetched
   * @format int64
   */
  count?: number;
};

/** Default list response */
export type UserListResponseSchema = ListResponseSchema &
  object & {
    Resources?: UserResourceResponse[];
  };

/** Default list response */
export type GroupListResponseSchema = ListResponseSchema &
  object & {
    Resources?: GroupResponseResource[];
  };

/** Default list response */
export type OrganizationListResponseSchema = ListResponseSchema &
  object & {
    Resources?: OrganizationResponseResource[];
  };

export interface ProfileName {
  firstName: string;
  lastName: string;
}

export interface FieldResponse {
  id: FieldId;
  fieldGroupId?: FieldGroupId;
  name: FieldName;
  isEnabled: IsEnabled;
  isForceEnabled: IsForceEnabled;
  dataType: string;
  isHrIntegrated: IsHrIntegrated;
  description?: string;
}

export type FieldId = object;

export type FieldGroupId = object;

export interface FieldName {
  value: string;
}

export interface IsEnabled {
  value: boolean;
}

export interface IsForceEnabled {
  value: boolean;
}

export interface IsHrIntegrated {
  value: boolean;
}

export interface FieldUpdate {
  id: FieldId;
  fieldGroupId: FieldGroupId;
  isReadOnly: IsReadOnly;
  isPrivate: IsPrivate;
  isPrivacyLocked: IsPrivacyLocked;
  priority: Priority;
}

export type ProfileCompanyId = object;

export interface IsRequired {
  value: boolean;
}

export interface IsPrivate {
  value: boolean;
}

export interface IsReadOnly {
  value: boolean;
}

export type Priority = object;

export interface IsPrivacyLocked {
  value: boolean;
}

export interface FieldCreate {
  name: FieldName;
  dataType: FieldDataType;
}

export type FieldDataType = object;

export type ProfileClusterMappingId = object;

export interface FieldAlias {
  value: string;
}

export type IndexedParserInputListIntegrationFieldResponse = object;

export interface ProfileDataUpdateRequest {
  fieldId: FieldId;
  data?: string;
  isPrivate?: boolean;
}

export interface ProfileDataFieldResponse {
  profileId: ProfileId;
  fieldId: FieldId;
  name: FieldName;
  fieldGroupId?: FieldGroupId;
  dataType: string;
  isReadOnly: IsReadOnly;
  priority?: Priority;
  isPrivate?: boolean;
  data?: string;
}

export type ProfileId = object;

export interface ProfileDataGroupResponse {
  fieldGroupId: FieldGroupId;
  name: GroupName;
  priority?: Priority;
  fields: ProfileDataFieldResponse[];
}

export interface GroupName {
  value: string;
}

export interface SectionField {
  id: FieldId;
  fieldGroupId?: FieldGroupId;
  name: FieldName;
  dataType: string;
  isReadOnly: IsReadOnly;
  isPrivate: IsPrivate;
  isPrivacyLocked: IsPrivacyLocked;
  isEnabled: IsEnabled;
  priority?: Priority;
}

export interface SectionResponse {
  fieldGroupId: FieldGroupId;
  name: GroupName;
  priority?: Priority;
  fields: SectionField[];
}

export interface SectionUpdate {
  id?: FieldGroupId;
  name?: GroupName;
  priority?: Priority;
  isDeleted: boolean;
  fields: SectionFieldUpdate[];
}

export interface SectionFieldUpdate {
  id: FieldId;
  isReadOnly: IsReadOnly;
  isPrivate: IsPrivate;
  isPrivacyLocked: IsPrivacyLocked;
  priority: Priority;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "/" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Valamis API
 * @version 5.2.0
 * @baseUrl /
 *
 * This document describes the Valamis API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  delegate = {
    /**
     * @description get certificate PDF by certificate ID
     *
     * @tags certificates, certificate
     * @name GetCertificatePdfByCertificateId
     * @summary Get certificate PDF by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/print
     * @secure
     * @response `200` `void` writes PDF bytes to the response stream
     * @response `403` `void` Forbidden if current user doesn't have VIEW permission for the requested certificate or isn't responsible for the owner of the requested certificate (depending on permission awareness state - true of false)
     */
    getCertificatePdfByCertificateId: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/certificates/v1/certificates/${id}/print`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description get certificate history by certificate ID
     *
     * @tags certificates, history
     * @name GetCertificateHistoryByCertificateId
     * @summary Get certificate history by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/history
     * @secure
     * @response `200` `(CertificateHistoryResponse)[]` collection of certificate history entries, ordered by modifiedDate
     * @response `403` `void` Forbidden if current user isn't responsible for the owner of the requested certificate
     */
    getCertificateHistoryByCertificateId: (id: number, params: RequestParams = {}) =>
      this.request<CertificateHistoryResponse[], void>({
        path: `/delegate/certificates/v1/certificates/${id}/history`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificate by certificate ID
     *
     * @tags certificates, certificate
     * @name GetCertificateById
     * @summary Get certificate by ID
     * @request GET:/delegate/certificates/v1/certificates/{id}
     * @secure
     * @response `200` `CertificateResponse` certificate
     * @response `403` `void` Forbidden if current user doesn't have VIEW permission for the requested certificate or isn't responsible for the owner of the requested certificate (depending on permission awareness state - true of false)
     */
    getCertificateById: (id: number, params: RequestParams = {}) =>
      this.request<CertificateResponse, void>({
        path: `/delegate/certificates/v1/certificates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificate goal history by certificate ID
     *
     * @tags certificates, goal-history
     * @name GetCertificateGoalHistoryByCertificateAndGoalId
     * @summary Get certificate goal history by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/history/goals/{goalId}
     * @secure
     * @response `200` `(GoalHistoryResponse)[]` collection of certificate goal history entries, ordered by modifiedDate
     * @response `403` `void` Forbidden if current user isn't responsible for the owner of the requested certificate
     */
    getCertificateGoalHistoryByCertificateAndGoalId: (id: number, goalId: number, params: RequestParams = {}) =>
      this.request<GoalHistoryResponse[], void>({
        path: `/delegate/certificates/v1/certificates/${id}/history/goals/${goalId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description start certificate renewal by certificate ID
     *
     * @tags certificates, recertification
     * @name StartCertificateRenewalResetOriginAndGoalStatusesByCertificateId
     * @summary Start certificate renewal (reset origin and goal statuses) by certificate ID
     * @request POST:/delegate/certificates/v1/certificates/{id}/renew
     * @secure
     * @response `204` `void` No Content
     * @response `400` `void` Bad Request if recertification feature is not enabled; if recertification is not "Open"; if recertification period has not started
     * @response `403` `void` Forbidden if current user isn't responsible for the owner of the requested certificate
     */
    startCertificateRenewalResetOriginAndGoalStatusesByCertificateId: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/certificates/v1/certificates/${id}/renew`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description internal API for starting certificate renewal by certificate origin ID
     *
     * @tags certificates, recertification
     * @name StartCertificateRenewalResetOriginAndGoalStatusesByCertificateOriginId
     * @summary Start certificate renewal (reset origin and goal statuses) by certificate origin ID
     * @request POST:/delegate/certificates/v1/certificates/renew
     * @secure
     * @response `200` `BulkRenewResponse` number of affected certificates and number of unique owners of these certificates
     * @response `400` `void` Bad Request if no valid originId or originType are provided in the request body; if recertification feature is not enabled; if recertification is not "Open"; if recertification period has not started
     * @response `403` `void` Forbidden if current user isn't responsible for the owner of the requested certificate
     * @response `404` `void` Not Found if "renew by origin" feature is not explicitly enabled
     */
    startCertificateRenewalResetOriginAndGoalStatusesByCertificateOriginId: (params: RequestParams = {}) =>
      this.request<BulkRenewResponse, void>({
        path: `/delegate/certificates/v1/certificates/renew`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificate goal history by certificate ID
     *
     * @tags certificates, goal-history
     * @name GetCertificateGoalHistoryByCertificateId
     * @summary Get certificate goal history by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/history/goals
     * @secure
     * @response `200` `(GoalsHistoryResponse)[]` collection of certificate goal history entries, ordered by modifiedDate
     * @response `403` `void` Forbidden if current user isn't responsible for the owner of the requested certificate
     */
    getCertificateGoalHistoryByCertificateId: (id: number, params: RequestParams = {}) =>
      this.request<GoalsHistoryResponse[], void>({
        path: `/delegate/certificates/v1/certificates/${id}/history/goals`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get user certificate count by user ID
     *
     * @tags certificates, users
     * @name GetUserCertificateCountByUserId
     * @summary Get user certificate count by user ID
     * @request GET:/delegate/certificates/v1/users/{id}/total
     * @secure
     * @response `200` `void` [[Map[String, Long]]] an object {"total": N}, where N is the count of certificates the user has achieved
     */
    getUserCertificateCountByUserId: (
      id: number,
      query: {
        /**
         * ID of the course to search certificates in
         * @format int64
         */
        courseId: number;
        /** string to filter certificate titles by; defaults to an empty value */
        title?: string;
        /** whether to search for valid or invalid certificate origins; defaults to an empty value */
        valid?: boolean;
        /** template sorting type; one of ["title", "-title"]; defaults to "title" */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/certificates/v1/users/${id}/total`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Get user certificates by user ID
     *
     * @tags certificates, users
     * @name GetUserCertificatesByUserId
     * @summary Get user certificates by user ID
     * @request GET:/delegate/certificates/v1/users/{id}
     * @secure
     * @response `200` `void` [[Map[String, Seq[CertificateResponse]]]] an object {"items": ITEMS, "total": N}, where N is the total count of certificates matching the filter, and ITEMS is a collection of user certificates
     * @response `403` `void` if current user is not responsible for the requested user
     * @response `404` `void` if no user exists for the requested ID
     */
    getUserCertificatesByUserId: (
      id: number,
      query?: {
        /** string to filter certificate titles by; defaults to an empty value */
        title?: string;
        /**
         * ID of the certificate origin; defaults to an empty value
         * @format int64
         */
        originId?: number;
        /** type of the certificate origin; one of ["LearningPath", "TrainingEvent"]; defaults to an empty value */
        originType?: string;
        /** whether to search for valid or invalid certificate origins; defaults to an empty value */
        valid?: boolean;
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/delegate/certificates/v1/users/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description delete fixed expiration dates by the certificate template ID
     *
     * @tags certificates, templates, expiration-dates
     * @name DeleteExpirationDatesFromTheTemplateByTemplateIdAndExpirationDateId
     * @summary Delete expiration dates from the template by template ID and expiration date ID
     * @request DELETE:/delegate/certificates/v1/templates/{id}/expiration-dates/{expirationDateId}
     * @secure
     * @response `204` `void` NoContent if expiration dates have been added successfully
     * @response `404` `void` Not Found if template with provided ID does not exist; if expiration date with provided ID does not exist
     */
    deleteExpirationDatesFromTheTemplateByTemplateIdAndExpirationDateId: (
      id: number,
      expirationDateId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/delegate/certificates/v1/templates/${id}/expiration-dates/${expirationDateId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description update fixed expiration date by the certificate template ID and expiration date ID
     *
     * @tags certificates, templates, expiration-dates
     * @name UpdateExpirationDateForTheTemplateByTemplateIdAndExpirationDateId
     * @summary Update expiration date for the template by template ID and expiration date ID
     * @request PUT:/delegate/certificates/v1/templates/{id}/expiration-dates/{expirationDateId}
     * @secure
     * @response `200` `TemplateExpirationDate` the new expiration date
     * @response `400` `void` if expiration dates are used without recertification mode; if the new expiration date has non zero seconds (anything different from HH:mm:00); if the new expiration date is not at least the size of recertification period away from now (in the future); if time between the new expiration date and any of the expiration dates is shorter than the size of recertification period; if time zone of any of the expiration dates isn't a valid zone ID
     * @response `401` `void` Unauthorized if no CSRF token was provided
     * @response `404` `void` Not Found if template with provided ID does not exist; if expiration date with provided ID does not exist
     */
    updateExpirationDateForTheTemplateByTemplateIdAndExpirationDateId: (
      id: number,
      expirationDateId: number,
      params: RequestParams = {},
    ) =>
      this.request<TemplateExpirationDate, void>({
        path: `/delegate/certificates/v1/templates/${id}/expiration-dates/${expirationDateId}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description add fixed expiration dates by the certificate template ID
     *
     * @tags certificates, templates, expiration-dates
     * @name AddExpirationDatesForTheTemplateByTemplateId
     * @summary Add expiration dates for the template by template ID
     * @request POST:/delegate/certificates/v1/templates/{id}/expiration-dates
     * @secure
     * @response `200` `TemplateExpirationDate` the updated expiration date
     * @response `400` `void` if expiration dates are used without recertification mode; if the new expiration date has non zero seconds (anything different from HH:mm:00); if the new expiration date is not at least the size of recertification period away from now (in the future); if time between the new expiration date and any of the expiration dates is shorter than the size of recertification period; if time zone of any of the expiration dates isn't a valid zone ID
     * @response `401` `void` Unauthorized if no CSRF token was provided
     * @response `404` `void` Not Found if template with provided ID does not exist
     */
    addExpirationDatesForTheTemplateByTemplateId: (id: number, params: RequestParams = {}) =>
      this.request<TemplateExpirationDate, void>({
        path: `/delegate/certificates/v1/templates/${id}/expiration-dates`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get fixed expiration dates by the certificate template ID
     *
     * @tags certificates, templates, expiration-dates
     * @name GetExpirationDatesForTheTemplateByTemplateId
     * @summary Get expiration dates for the template by template ID
     * @request GET:/delegate/certificates/v1/templates/{id}/expiration-dates
     * @secure
     * @response `200` `void` Seq[[[TemplateExpirationDate]]] list of expiration dates for the template
     * @response `404` `void` Not Found if template with provided ID does not exist
     */
    getExpirationDatesForTheTemplateByTemplateId: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/certificates/v1/templates/${id}/expiration-dates`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description delete the certificate template by ID
     *
     * @tags certificates, templates
     * @name DeleteTheTemplateById
     * @summary Delete the template by ID
     * @request DELETE:/delegate/certificates/v1/templates/{id}
     * @secure
     * @response `204` `void` NoContent if template has been deleted successfully
     * @response `403` `void` Forbidden if template has linked granted certificates
     */
    deleteTheTemplateById: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/certificates/v1/templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description update certificate template by ID
     *
     * @tags certificates, templates
     * @name UpdateATemplateById
     * @summary Update a template by ID
     * @request PUT:/delegate/certificates/v1/templates/{id}
     * @secure
     * @response `200` `TemplateLocalized` the updated template
     * @response `400` `void` if "basic" key is not present in both title and description; if any two of the expiration dates are the same or any expiration date has non zero seconds (anything different from HH:mm:00); if expiration dates are used without recertification mode; if time between now and any of the expiration dates is shorter than the size of recertification period; if time zone of any of the expiration dates isn't a valid zone ID
     * @response `401` `void` Unauthorized if no CSRF token was provided
     * @response `403` `void` Forbidden if user has no UPDATE permission for the template
     * @response `404` `void` Not Found if template with the requested id doesn't exist
     */
    updateATemplateById: (id: number, params: RequestParams = {}) =>
      this.request<TemplateLocalized, void>({
        path: `/delegate/certificates/v1/templates/${id}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificate template by ID
     *
     * @tags certificates, templates
     * @name GetTemplateById
     * @summary Get template by ID
     * @request GET:/delegate/certificates/v1/templates/{id}
     * @secure
     * @response `200` `TemplateLocalized` certificate template
     */
    getTemplateById: (id: number, params: RequestParams = {}) =>
      this.request<TemplateLocalized, any>({
        path: `/delegate/certificates/v1/templates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of users that have certificates issued based on the template by template ID
     *
     * @tags certificates, templates
     * @name GetListOfUsersLinkedToTheTemplateByTemplateId
     * @summary Get list of users linked to the template by template ID
     * @request GET:/delegate/certificates/v1/templates/{id}/certificates/users
     * @secure
     * @response `200` `(UserInfo)[]` a collection of user info objects
     */
    getListOfUsersLinkedToTheTemplateByTemplateId: (id: number, params: RequestParams = {}) =>
      this.request<UserInfo[], any>({
        path: `/delegate/certificates/v1/templates/${id}/certificates/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create a certificate template
     *
     * @tags certificates, templates
     * @name CreateATemplate
     * @summary Create a template
     * @request POST:/delegate/certificates/v1/templates
     * @secure
     * @response `200` `TemplateLocalized` the new template
     * @response `400` `void` if "basic" key is not present in both title and description; if time between the any two expiration dates for this template is shorter than the size of the new recertification period
     * @response `401` `void` Unauthorized if no CSRF token was provided
     * @response `403` `void` Forbidden if user has no ADD_CERTIFICATE_TEMPLATE permission in scope defined by "groupId" in request body
     */
    createATemplate: (params: RequestParams = {}) =>
      this.request<TemplateLocalized, void>({
        path: `/delegate/certificates/v1/templates`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificate templates by filter
     *
     * @tags certificates, templates
     * @name GetTemplatesByFilter
     * @summary Get templates by filter
     * @request GET:/delegate/certificates/v1/templates
     * @secure
     * @response `200` `Any` an object {"items": ITEMS, "total": N}, where N is the total count of templates matching the filter, and ITEMS is a collection of user certificates
     */
    getTemplatesByFilter: (
      query?: {
        /**
         * ID of the user to search templates for; defaults to an empty value
         * @format int64
         */
        userId?: number;
        /**
         * ID of the course to search templates in; defaults to an empty value
         * @format int64
         */
        groupId?: number;
        /** string to filter template titles by; defaults to an empty value */
        title?: string;
        /** whether to search only templates that have granted certificates based on them; defaults to an empty value */
        isGranted?: boolean;
        /** template sorting type; one of ["title", "-title"]; defaults to "title" */
        sort?: string;
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/certificates/v1/templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description clone a certificate template
     *
     * @tags certificates, templates
     * @name CloneATemplateById
     * @summary Clone a template by ID
     * @request POST:/delegate/certificates/v1/templates/{id}/clone
     * @secure
     * @response `200` `TemplateResponse` the new template
     * @response `401` `void` Unauthorized if no CSRF token was provided
     * @response `403` `void` Forbidden if user has no ADD_CERTIFICATE_TEMPLATE permission in scope defined by "groupId" in request body
     * @response `404` `void` Not Found if template with the requested ID doesn't exist
     */
    cloneATemplateById: (id: number, params: RequestParams = {}) =>
      this.request<TemplateResponse, void>({
        path: `/delegate/certificates/v1/templates/${id}/clone`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create certificate print template; a regular file upload with Content-* headers and byte stream is required
     *
     * @tags certificates, print-templates
     * @name CreateCertificatePrintTemplate
     * @summary Create certificate print template
     * @request POST:/delegate/certificates/v1/print-templates
     * @secure
     * @response `200` `PrintTemplateResponse` certificate print template
     * @response `400` `void` the request doesn't have Content-Disposition header, body is empty or index file isn't present in the uploaded ZIP file
     * @response `415` `void` certificate print template file type isn't ZIP
     */
    createCertificatePrintTemplate: (
      query: {
        /**
         * ID of the group (scope) of the new print template
         * @format int64
         */
        groupId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PrintTemplateResponse, void>({
        path: `/delegate/certificates/v1/print-templates`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get certificate print templates for current instance (for company by company ID); only returns print templates that current user has VIEW permission for
     *
     * @tags certificates, print-templates
     * @name GetCertificatePrintTemplatesForCurrentInstanceCompany
     * @summary Get certificate print templates for current instance (company)
     * @request GET:/delegate/certificates/v1/print-templates
     * @secure
     * @response `200` `(PrintTemplateResponse)[]` list of certificate print templates
     */
    getCertificatePrintTemplatesForCurrentInstanceCompany: (params: RequestParams = {}) =>
      this.request<PrintTemplateResponse[], any>({
        path: `/delegate/certificates/v1/print-templates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete certificate print template by print template ID
     *
     * @tags certificates, print-templates
     * @name DeleteCertificatePrintTemplateByPrintTemplateId
     * @summary Delete certificate print template by print template ID
     * @request DELETE:/delegate/certificates/v1/print-templates/{id}
     * @secure
     * @response `204` `void` certificate print template removed
     */
    deleteCertificatePrintTemplateByPrintTemplateId: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/certificates/v1/print-templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get certificate print templates for current instance (for company by company ID); ignores VIEW permission
     *
     * @tags certificates, print-templates
     * @name GetCertificatePrintTemplateByTemplateId
     * @summary Get certificate print template by template ID
     * @request GET:/delegate/certificates/v1/print-templates/{id}
     * @secure
     * @response `200` `PrintTemplateResponse` certificate print template
     */
    getCertificatePrintTemplateByTemplateId: (id: number, params: RequestParams = {}) =>
      this.request<PrintTemplateResponse, any>({
        path: `/delegate/certificates/v1/print-templates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificate origins by title and skip-take
     *
     * @tags certificates, origins
     * @name GetCertificateOriginsByTitleAndSkipTake
     * @summary Get certificate origins by title and skip-take
     * @request GET:/delegate/certificates/v1/origins
     * @secure
     * @response `200` `Any` range of certificates origin with user info
     */
    getCertificateOriginsByTitleAndSkipTake: (
      query: {
        /** string to filter origin titles by */
        title: string;
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/certificates/v1/origins`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificate logo by certificate ID
     *
     * @tags certificates, logo
     * @name GetCertificateLogoByCertificateId
     * @summary Get certificate logo by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/logo
     * @secure
     * @response `200` `InputStream` logo byte stream
     */
    getCertificateLogoByCertificateId: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/delegate/certificates/v1/certificates/${id}/logo`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get badge template for certificate by certificate ID
     *
     * @tags certificates, badges
     * @name GetBadgeIssuerByCertificateId
     * @summary Get badge issuer by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/issue_badge/issuer
     * @secure
     * @response `200` `BadgeIssuer` badge issuer
     */
    getBadgeIssuerByCertificateId: (id: number, params: RequestParams = {}) =>
      this.request<BadgeIssuer, any>({
        path: `/delegate/certificates/v1/certificates/${id}/issue_badge/issuer`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get badge template for certificate by certificate ID
     *
     * @tags certificates, badges
     * @name GetBadgeTemplateByCertificateId
     * @summary Get badge template by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/issue_badge/badge
     * @secure
     * @response `200` `Badge` badge
     */
    getBadgeTemplateByCertificateId: (
      id: number,
      query: {
        /** root URL of the badge issuer */
        rootUrl: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Badge, any>({
        path: `/delegate/certificates/v1/certificates/${id}/issue_badge/badge`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get user badge for certificate by certificate ID and user ID; returns an object compliant with https://github.com/mozilla/openbadges-specification/blob/master/Assertion/latest.md
     *
     * @tags certificates, badges
     * @name GetBadgeForUserByCertificateId
     * @summary Get badge for user by certificate ID
     * @request GET:/delegate/certificates/v1/certificates/{id}/issue_badge
     * @secure
     * @response `200` `BadgeResponse` badge assertion
     */
    getBadgeForUserByCertificateId: (
      id: number,
      query: {
        /**
         * ID of the user to get badge for
         * @format int64
         */
        userId: number;
        /** root URL of the badge issuer */
        rootUrl: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BadgeResponse, any>({
        path: `/delegate/certificates/v1/certificates/${id}/issue_badge`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get certificates build info
     *
     * @tags certificates, about
     * @name GetCertificatesBuildInfo
     * @summary Get certificates build info
     * @request GET:/delegate/certificates/about
     * @secure
     * @response `200` `Record<string,string>` an object {"version":"x1.y1.z1","api-version":x2.y2.z2}, where xK.yM.zN are the portlet version and the current API version retrieved from build info
     */
    getCertificatesBuildInfo: (params: RequestParams = {}) =>
      this.request<Record<string, string>, any>({
        path: `/delegate/certificates/about`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description send notifications for all expired certificates by date interval
     *
     * @tags certificates, expired-certificates
     * @name SendNotificationsForAllExpiredCertificatesByDateInterval
     * @summary Send notifications for all expired certificates by date interval
     * @request POST:/delegate/certificates/v1/expired/send-notifications
     * @secure
     * @response `204` `void` notifications sent
     */
    sendNotificationsForAllExpiredCertificatesByDateInterval: (
      query?: {
        /** date from which to search for expired certificates; defaults to "7 days ago at midnight"; in the ISO 8601 DateTime format */
        startDate?: string;
        /** date until which to search for expired certificates; defaults to "tomorrow at midnight"; in the ISO 8601 DateTime format */
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/certificates/v1/expired/send-notifications`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description send notification for the expired certificate by certificate ID
     *
     * @tags certificates, expired-certificates
     * @name SendNotificationForTheExpiredCertificateByCertificateId
     * @summary Send notification for the expired certificate by certificate ID
     * @request POST:/delegate/certificates/v1/expired/send-notification
     * @secure
     * @response `204` `void` notification sent
     */
    sendNotificationForTheExpiredCertificateByCertificateId: (
      query: {
        /**
         * ID of the certificate
         * @format int64
         */
        certificateId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/certificates/v1/expired/send-notification`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description get expired certificates by date interval and skip-take
     *
     * @tags certificates, expired-certificates
     * @name GetExpiredCertificatesByDateIntervalAndSkipTake
     * @summary Get expired certificates by date interval and skip-take
     * @request GET:/delegate/certificates/v1/expired
     * @secure
     * @response `200` `CertificateExpiredResponse` expired certificates
     */
    getExpiredCertificatesByDateIntervalAndSkipTake: (
      query?: {
        /** date from which to search for expired certificates; defaults to "7 days ago at midnight"; in the ISO 8601 DateTime format */
        startDate?: string;
        /** date until which to search for expired certificates; defaults to "tomorrow at midnight"; in the ISO 8601 DateTime format */
        endDate?: string;
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CertificateExpiredResponse, any>({
        path: `/delegate/certificates/v1/expired`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create a Credly badge by user ID
     *
     * @tags certificates, credly-badges
     * @name CreateACredlyBadge
     * @summary Create a Credly badge
     * @request POST:/delegate/certificates/v1/credly-badges
     * @secure
     * @response `201` `CredlyIssueBadgeResponse` JSON with badge accept URL
     * @response `403` `void` Forbidden if user does not have a certificate referenced by certificateId
     */
    createACredlyBadge: (params: RequestParams = {}) =>
      this.request<CredlyIssueBadgeResponse, void>({
        path: `/delegate/certificates/v1/credly-badges`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get user's Credly badges by user ID
     *
     * @tags certificates, credly-badges
     * @name GetUserSCredlyBadgesByUserId
     * @summary Get user's Credly badges by user ID
     * @request GET:/delegate/certificates/v1/credly-badges/{id}/users/{userId}
     * @secure
     * @response `200` `(CredlyBadge)[]` list of credly badges
     */
    getUserSCredlyBadgesByUserId: (userId: number, id: string, params: RequestParams = {}) =>
      this.request<CredlyBadge[], any>({
        path: `/delegate/certificates/v1/credly-badges/${id}/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get active Credly badge template by template ID
     *
     * @tags certificates, credly-badge-templates
     * @name GetActiveCredlyBadgeTemplateByTemplateId
     * @summary Get active Credly badge template by template ID
     * @request GET:/delegate/certificates/v1/credly-badge-templates/{id}
     * @secure
     * @response `200` `CredlyBadgeTemplate` credly badge template
     */
    getActiveCredlyBadgeTemplateByTemplateId: (id: number, params: RequestParams = {}) =>
      this.request<CredlyBadgeTemplate, any>({
        path: `/delegate/certificates/v1/credly-badge-templates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get active Credly badge templates
     *
     * @tags certificates, credly-badge-templates
     * @name GetActiveCredlyBadgeTemplates
     * @summary Get active Credly badge templates
     * @request GET:/delegate/certificates/v1/credly-badge-templates
     * @secure
     * @response `200` `(CredlyBadgeTemplate)[]` list of credly badge templates
     */
    getActiveCredlyBadgeTemplates: (params: RequestParams = {}) =>
      this.request<CredlyBadgeTemplate[], any>({
        path: `/delegate/certificates/v1/credly-badge-templates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description converts the grading scale value to a similar value from another grading scale, i.e. a value that correlates the best with the provided one through the default (0-100) scale
     *
     * @tags Grading, Public
     * @name ConvertsTheGradingScaleValueToASimilarValueFromAnotherGradingScale
     * @summary Converts the grading scale value to a similar value from another grading scale
     * @request GET:/delegate/valamis-grading/v1/values/{id}/on-scale/{scaleId}
     * @secure
     * @response `200` `GradingScaleValue` Returns Some(value) if a similar value exists on the target grading scale, None otherwise
     */
    convertsTheGradingScaleValueToASimilarValueFromAnotherGradingScale: (
      id: number,
      scaleId: number,
      params: RequestParams = {},
    ) =>
      this.request<GradingScaleValue, any>({
        path: `/delegate/valamis-grading/v1/values/${id}/on-scale/${scaleId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns value from the default grading scale that matches passed plain value
     *
     * @tags Grading, Public
     * @name GetValueFromTheDefaultGradingScale
     * @summary Get value from the default grading scale
     * @request GET:/delegate/valamis-grading/v1/values/by-base
     * @secure
     * @response `200` `GradingScaleValue` Returns value from the default grading scale
     */
    getValueFromTheDefaultGradingScale: (baseValue: number, params: RequestParams = {}) =>
      this.request<GradingScaleValue, any>({
        path: `/delegate/valamis-grading/v1/values/by-base`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns a grading scale value by ID
     *
     * @tags Grading, Public
     * @name GetGradingScaleValueById
     * @summary Get grading scale value by ID
     * @request GET:/delegate/valamis-grading/v1/values/{id}
     * @secure
     * @response `200` `GradingScaleValue` Returns a grading scale value by ID
     * @response `500` `void` No grading scale value with ID
     */
    getGradingScaleValueById: (id: number, params: RequestParams = {}) =>
      this.request<GradingScaleValue, void>({
        path: `/delegate/valamis-grading/v1/values/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns all values of a grading scale
     *
     * @tags Grading, Public
     * @name GetAllValuesOfAGradingScale
     * @summary Get all values of a grading scale
     * @request GET:/delegate/valamis-grading/v1/scales/{id}/values
     * @secure
     * @response `200` `GradingScaleValue` Returns all values of a grading scale
     */
    getAllValuesOfAGradingScale: (id: number, params: RequestParams = {}) =>
      this.request<GradingScaleValue, any>({
        path: `/delegate/valamis-grading/v1/scales/${id}/values`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns company grading scales
     *
     * @tags Grading, Public
     * @name GetGradingScales
     * @summary Get grading scales
     * @request GET:/delegate/valamis-grading/v1/scales/
     * @secure
     * @response `200` `(GradingScale)[]` Returns company grading scales
     */
    getGradingScales: (
      query?: {
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GradingScale[], any>({
        path: `/delegate/valamis-grading/v1/scales/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns grading scale coverage (percent)
     *
     * @tags Grading, Public
     * @name GetGradingScalesCoverage
     * @summary Get grading scales coverage
     * @request GET:/delegate/valamis-grading/v1/scales/{id}/coverage
     * @secure
     * @response `200` `number` Returns grading scales coverage
     */
    getGradingScalesCoverage: (id: number, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/delegate/valamis-grading/v1/scales/${id}/coverage`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns a grading scale by its ID
     *
     * @tags Grading, Public
     * @name GetGradingScaleById
     * @summary Get grading scale by ID
     * @request GET:/delegate/valamis-grading/v1/scales/{id}
     * @secure
     * @response `200` `GradingScale` Returns grading scale by ID
     * @response `500` `void` No grading scale with ID
     */
    getGradingScaleById: (id: number, params: RequestParams = {}) =>
      this.request<GradingScale, void>({
        path: `/delegate/valamis-grading/v1/scales/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns module version
     *
     * @tags Grading, Public
     * @name GetGradingModuleVersion
     * @summary Get module version
     * @request GET:/delegate/valamis-grading/about/
     * @secure
     * @response `200` `Map` Returns module version
     */
    getGradingModuleVersion: (params: RequestParams = {}) =>
      this.request<Map, any>({
        path: `/delegate/valamis-grading/about/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns mixed content sorted by rating in reverse order
     *
     * @tags Recommendations, Public
     * @name GetTopRatedMixedRecommendations
     * @summary Get mixed recommendations
     * @request GET:/delegate/valamis-recommendations/rating/top/mixed
     * @secure
     * @response `200` `Any` Returns mixed recommendations
     */
    getTopRatedMixedRecommendations: (
      query?: {
        /** content types required param only for mixed endpoint; defaults to "None"; */
        contentTypes?: ConventionalContentType[];
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
        /** filter category ids; the multi-param; */
        categoryIds?: number[];
        /** condition between category ids groups; */
        categoryGroupsCondition?: Condition;
        /** condition between ids in one category ids group; */
        categoryCondition?: Condition;
        /** languages filter */
        language?: string[];
        /** considering user competences; */
        considerUserCompetences?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/valamis-recommendations/rating/top/mixed`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns mixed recommendations
     *
     * @tags Recommendations, Public
     * @name GetGeneralMixedRecommendations
     * @summary Get mixed recommendations
     * @request GET:/delegate/valamis-recommendations/recommendations/mixed
     * @secure
     * @response `200` `Any` Returns mixed recommendations
     */
    getGeneralMixedRecommendations: (
      query?: {
        /** content types required param only for mixed endpoint; defaults to "None"; */
        contentTypes?: ConventionalContentType[];
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
        /** filter category ids; the multi-param; */
        categoryIds?: number[];
        /** condition between category ids groups; */
        categoryGroupsCondition?: Condition;
        /** condition between ids in one category ids group; */
        categoryCondition?: Condition;
        /** how to consider user history; */
        userHistoryAccounting?: UserHistoryAccounting;
        /** languages filter */
        language?: string[];
        /** considering user competences; */
        considerUserCompetences?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/valamis-recommendations/recommendations/mixed`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns module version
     *
     * @tags Recommendations, Public
     * @name GetRecommendationsModuleVersion
     * @summary Get module version
     * @request GET:/delegate/valamis-recommendations/about
     * @secure
     * @response `200` `Map1` Returns module version
     */
    getRecommendationsModuleVersion: (params: RequestParams = {}) =>
      this.request<Map1, any>({
        path: `/delegate/valamis-recommendations/about`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description returns mixed content sorted by popularity in reverse order
     *
     * @tags Recommendations, Public
     * @name GetPopularMixedRecommendations
     * @summary Get mixed recommendations
     * @request GET:/delegate/valamis-recommendations/popularity/mixed
     * @secure
     * @response `200` `Any` Returns mixed recommendations
     */
    getPopularMixedRecommendations: (
      query?: {
        /** content types required param only for mixed endpoint; defaults to "None"; */
        contentTypes?: ConventionalContentType[];
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
        /** filter category ids; the multi-param; */
        categoryIds?: number[];
        /** condition between category ids groups; */
        categoryGroupsCondition?: Condition;
        /** condition between ids in one category ids group; */
        categoryCondition?: Condition;
        /** popularity type */
        type?: PopularityType;
        /** languages filter */
        language?: string[];
        /** considering user competences; */
        considerUserCompetences?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/valamis-recommendations/popularity/mixed`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description deactivate learning path by ID.
     *
     * @tags learning-paths, learning-path
     * @name DeactivateLearningPath
     * @summary Deactivate learning path
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/deactivate
     * @secure
     * @response `204` `void` learning path is deactivated
     */
    deactivateLearningPath: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/deactivate`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description delete learning path by ID.
     *
     * @tags learning-paths, learning-path
     * @name DeleteLearningPath
     * @summary Delete learning path
     * @request DELETE:/delegate/learning-paths/v1/learning-paths/{id}
     * @secure
     * @response `204` `void` learning path is deleted
     */
    deleteLearningPath: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description get learning path by ID; returns 406 if learning path does not exist in the language, specified by Accept-Language header; response (if not empty) contains "Content-Language" header (compliant with RFC 7231 section 3.1.3.2)
     *
     * @tags learning-paths, learning-path
     * @name GetLearningPathById
     * @summary Get learning path by ID
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}
     * @secure
     * @response `200` `LearningPathResponse` learning path
     */
    getLearningPathById: (
      id: number,
      query?: {
        /**
         * flag to indicate whether to add user status to the response
         * @default "false"
         */
        addUserData?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<LearningPathResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Start learning path as current user by learning path ID (sets user progress to 0.001).
     *
     * @tags learning-paths, learning-path
     * @name StartLearningPathAsCurrentUser
     * @summary Start learning path as current user
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/start
     * @secure
     * @response `204` `void` learning path is started
     */
    startLearningPathAsCurrentUser: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/start`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description clone a learning path.
     *
     * @tags learning-paths, learning-path
     * @name CloneLearningPath
     * @summary Clone learning path
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/clone
     * @secure
     * @response `200` `LPResponse` cloned learning path
     */
    cloneLearningPath: (id: number, params: RequestParams = {}) =>
      this.request<LPResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/clone`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of learning paths. in case sorting value starts with "-" the result items will be sorted in descending order regarding the value, otherwise in ascending order
     *
     * @tags learning-paths, learning-path
     * @name GetLearningPaths
     * @summary Get learning paths
     * @request GET:/delegate/learning-paths/v1/learning-paths
     * @secure
     * @response `200` `Any` range of learning paths
     */
    getLearningPaths: (
      query?: {
        /**
         * flag to indicate whether to add user data to the response
         * @default "false"
         */
        addUserData?: boolean;
        /** text to search in learning path titles; defaults to an empty value */
        title?: string;
        /**
         * course ID to filter learning paths by; defaults to an empty value
         * @format int64
         */
        courseId?: number;
        /**
         * user ID to filter learning paths by; defaults to an empty value
         * @format int64
         */
        userId?: number;
        /** whether to search only published learning paths; defaults to an empty value, will result in searching for both published and draft learning paths */
        published?: boolean;
        /** whether to search only active learning paths; defaults to an empty value, will result in searching for both active and inactive learning paths */
        activated?: boolean;
        /**
         * ID of the user, enables positive membership check when searching; defaults to an empty value
         * @format int64
         */
        memberId?: number;
        /**
         * ID of the user, enables negative membership check when searching; defaults to an empty value
         * @format int64
         */
        notMemberId?: number;
        /** list of category IDs to filter learning paths by, in multi-param form. Each param is a string with one or more category ID combined with "&#124;" char (boolean OR). To exclude some categories need to use "!" char before category ID, in this case only one ID in param is allowed. For example: categoryIds[]=22&#124;33&#124;434&categoryIds[]=99&categoryIds[]=!77 */
        categoryIds?: string[];
        /** locale to filter learning paths by; defaults to an empty value */
        locale?: string;
        /** filter learning paths by reviewRequired; defaults to an empty value */
        reviewRequired?: boolean;
        /** filter learning paths by hasLearningPoints; defaults to an empty value */
        hasLearningPoints?: boolean;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["title", "-title", "createdDate", "-createdDate", "modifiedDate", "-modifiedDate"]
         * @default "title"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/learning-paths/v1/learning-paths`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create a learning path.
     *
     * @tags learning-paths, learning-path
     * @name CreateLearningPath
     * @summary Create learning path
     * @request POST:/delegate/learning-paths/v1/learning-paths
     * @secure
     * @response `200` `LPResponse` created learning path
     */
    createLearningPath: (params: RequestParams = {}) =>
      this.request<LPResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description activate learning path by ID.
     *
     * @tags learning-paths, learning-path
     * @name ActivateLearningPath
     * @summary Activate learning path
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/activate
     * @secure
     * @response `204` `void` learning path is activated
     */
    activateLearningPath: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/activate`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description get goal tree of a learning path by learning path ID.
     *
     * @tags learning-paths, learning-path
     * @name GetLearningPathGoalTree
     * @summary Get learning path goal tree
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/goals/tree
     * @secure
     * @response `200` `(GoalResponse)[]` list of learning path goals
     */
    getLearningPathGoalTree: (id: number, params: RequestParams = {}) =>
      this.request<GoalResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/goals/tree`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get competences required by the learning path identified by **id**, indicating whether the user identified by **userId** is compliant with required skill level.
     *
     * @tags learning-paths, learning-path
     * @name GetRequiredCompetencesByLearningPathIdAndUserId
     * @summary Get required competences by learning path ID and user ID
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/users/{userId}/required-competences
     * @secure
     * @response `200` `(UserCompetenceResponse)[]` list of required competences along with user skill compliance indication
     */
    getRequiredCompetencesByLearningPathIdAndUserId: (id: number, userId: number, params: RequestParams = {}) =>
      this.request<UserCompetenceResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/users/${userId}/required-competences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get learning path user members by learning path ID. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, members
 * @name GetLearningPathMembersOfTypeUser
 * @summary Get learning path members of type "user"
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/users
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (UserMemberResponse)[],

}` range of user members
 */
    getLearningPathMembersOfTypeUser: (
      id: number,
      query?: {
        /** text to search in user names; defaults to an empty value */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: UserMemberResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get learning path audience members by learning path ID.
 *
 * @tags learning-paths, members
 * @name GetLearningPathMembersOfTypeAudience
 * @summary Get learning path members of type "audience"
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/audiences
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (AudienceMemberResponse)[],

}` range of audience members
 */
    getLearningPathMembersOfTypeAudience: (
      id: number,
      query?: {
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: AudienceMemberResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/audiences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description update status of a learning path goal for user by learning path ID and user ID; the only allowed status transitions are "InReview" -> "Success" and "InReview" -> "Failed"
     *
     * @tags learning-paths, members
     * @name UpdateLearningPathGoalStatusForUser
     * @summary Update learning path goal status for user
     * @request PUT:/delegate/learning-paths/v1/learning-paths/{id}/members/users/{userId}/goals/{goalId}/progress/status
     * @secure
     * @response `204` `void` learning path goal status is updated
     */
    updateLearningPathGoalStatusForUser: (id: number, goalId: number, userId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/users/${userId}/goals/${goalId}/progress/status`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description update status of a learning path for user by learning path ID and user ID.
     *
     * @tags learning-paths, members
     * @name UpdateLearningPathStatusForUser
     * @summary Update learning path status for user
     * @request PUT:/delegate/learning-paths/v1/learning-paths/{id}/members/users/{userId}/progress/status
     * @secure
     * @response `204` `void` learning path status is updated
     */
    updateLearningPathStatusForUser: (id: number, userId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/users/${userId}/progress/status`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description delete learning path member by learning path ID and member ID.
     *
     * @tags learning-paths, members
     * @name DeleteLearningPathMember
     * @summary Delete learning path member
     * @request DELETE:/delegate/learning-paths/v1/learning-paths/{id}/members/{type}/{memberId}
     * @secure
     * @response `204` `void` member is deleted
     */
    deleteLearningPathMember: (id: number, memberId: number, type: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/${type}/${memberId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags learning-paths, members
     * @name SetMandatoryOptionForLpMember
     * @summary Set mandatory option for LP member
     * @request PUT:/delegate/learning-paths/v1/learning-paths/{id}/members/{type}/{memberId}
     * @secure
     * @response `204` `void` mandatory option is set
     */
    setMandatoryOptionForLpMember: (id: number, memberId: number, type: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/${type}/${memberId}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description get user's goals progress (list of statuses) of the learning path by learning path ID and user ID.
     *
     * @tags learning-paths, members
     * @name GetLearningPathGoalsProgressForUser
     * @summary Get learning path goals progress for user
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/users/{userId}/goals-progress
     * @secure
     * @response `200` `(UserGoalStatus)[]` list of user goal statuses
     */
    getLearningPathGoalsProgressForUser: (id: number, userId: number, params: RequestParams = {}) =>
      this.request<UserGoalStatus[], any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/users/${userId}/goals-progress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get status of a learning path for user by learning path ID.
     *
     * @tags learning-paths, members
     * @name GetLearningPathProgressForUser
     * @summary Get learning path progress for user
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/users/{userId}/progress
     * @secure
     * @response `200` `UserLPStatusResponse` learning path progress for user
     */
    getLearningPathProgressForUser: (id: number, userId: number, params: RequestParams = {}) =>
      this.request<UserLPStatusResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/users/${userId}/progress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description add members to the learning path by learning path ID.
     *
     * @tags learning-paths, members
     * @name AddMembersToTheLearningPath
     * @summary Add members to the learning path
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/members/{type}
     * @secure
     * @response `204` `void` members are added
     */
    addMembersToTheLearningPath: (id: number, type: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/${type}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
 * @description get learning path user group members by learning path ID. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, members
 * @name GetLearningPathMembersOfTypeUserGroup
 * @summary Get learning path members of type "user group"
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/groups
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (GroupMemberResponse)[],

}` range of user group members
 */
    getLearningPathMembersOfTypeUserGroup: (
      id: number,
      query?: {
        /** text to search in user group names; defaults to an empty value */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: GroupMemberResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get learning path organization members by learning path ID. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, members
 * @name GetLearningPathMembersOfTypeOrganization
 * @summary Get learning path members of type "organization"
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/organizations
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (GroupMemberResponse)[],

}` range of organization members
 */
    getLearningPathMembersOfTypeOrganization: (
      id: number,
      query?: {
        /** text to search in organization names; defaults to an empty value */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: GroupMemberResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get learning path role members by learning path ID.
 *
 * @tags learning-paths, members
 * @name GetLearningPathMembersOfTypeRole
 * @summary Get learning path members of type "role"
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/roles
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (RoleMemberResponse)[],

}` range of role members
 */
    getLearningPathMembersOfTypeRole: (
      id: number,
      query?: {
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: RoleMemberResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get number of successful learning path goals for user by user ID; returns an object {"count":N}, where N is the number of successful learning path goals for the user
     *
     * @tags learning-paths, user
     * @name GetNumberOfSuccessfulLearningPathGoalsForUser
     * @summary Get number of successful learning path goals for user
     * @request GET:/delegate/learning-paths/v1/users/{id}/success-goals-count
     * @secure
     * @response `200` `void` [[Map[String, Long]]] number of successful learning path goals for a user
     */
    getNumberOfSuccessfulLearningPathGoalsForUser: (
      id: number,
      query: {
        /**
         * user ID to filter learning path by; can be an integer number or "current"
         * @format int64
         */
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/users/${id}/success-goals-count`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description get learning path for the user by learning path ID.
     *
     * @tags learning-paths, user
     * @name GetLearningPathForUser
     * @summary Get learning path for user
     * @request GET:/delegate/learning-paths/v1/users/{id}/learning-paths/{lpId}
     * @secure
     * @response `200` `LPForMemberResponse` user learning path
     */
    getLearningPathForUser: (id: number, lpId: number, params: RequestParams = {}) =>
      this.request<LPForMemberResponse, any>({
        path: `/delegate/learning-paths/v1/users/${id}/learning-paths/${lpId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get learning paths for the user; returns paginated result in case sorting value starts with "-" the result items will be sorted in descending order regarding the value, otherwise in ascending order
 *
 * @tags learning-paths, user
 * @name GetListOfLearningPathsForTheUser
 * @summary Get list of learning paths for the user.
 * @request GET:/delegate/learning-paths/v1/users/{id}/learning-paths
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (LPForMemberResponse)[],

}` range of user learning paths
 */
    getListOfLearningPathsForTheUser: (
      id: number,
      query?: {
        /** text to search in learning path titles; defaults to an empty value */
        title?: string;
        /** course ID to filter learning path by */
        courseId?: number[];
        /**
         * user ID to filter learning path by; can be an integer number or "current"
         * @format int64
         */
        userId?: number;
        /** list of user statuses to filter learning paths by, in the multi-param form; can contain any combination of ["InProgress", "Failed", "Success", "InReview"]; defaults to an empty list */
        status?: string[];
        /** list of category IDs to filter learning paths by, in the multi-param form; defaults to an empty list */
        categoryId?: number[];
        /** locale to filter learning paths by */
        locale?: string;
        /** filter learning paths by reviewRequired; defaults to an empty value */
        reviewRequired?: boolean;
        /** filter learning paths by hasLearningPoints; defaults to an empty value */
        hasLearningPoints?: boolean;
        /**
         * sort type, one of ["title", "-title", "createdDate", "-createdDate", "modifiedDate", "-modifiedDate"]
         * @default "title"
         */
        sort?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: LPForMemberResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/users/${id}/learning-paths`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get learning path status history for the user by learning path ID.
     *
     * @tags learning-paths, user, history
     * @name GetLearningPathStatusHistoryForUser
     * @summary Get learning path status history for user
     * @request GET:/delegate/learning-paths/v1/users/{id}/learning-paths/{lpId}/history
     * @secure
     * @response `200` `(LPUserStatusHistoryResponse)[]` user learning path status history
     * @response `403` `void` Forbidden if current user is not responsible for the requested user
     */
    getLearningPathStatusHistoryForUser: (id: number, lpId: number, params: RequestParams = {}) =>
      this.request<LPUserStatusHistoryResponse[], void>({
        path: `/delegate/learning-paths/v1/users/${id}/learning-paths/${lpId}/history`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get number of learning paths with status for user by user ID; counts both active and inactive learning paths; returns an object {"value":N}, where N is the number of found learning paths
     *
     * @tags learning-paths, user
     * @name GetNumberOfLearningPathsWithStatusForUser
     * @summary Get number of learning paths with status for user
     * @request GET:/delegate/learning-paths/v1/users/{id}/learning-paths-total
     * @secure
     * @response `200` `void` [[Map[String, Long]]] total number of user's learning paths
     */
    getNumberOfLearningPathsWithStatusForUser: (
      id: number,
      query: {
        /** text to search in learning path titles; defaults to an empty value */
        title?: string;
        /** course ID to filter learning path by */
        courseId?: number[];
        /**
         * user ID to filter learning path by; can be an integer number or "current"
         * @format int64
         */
        userId?: number;
        /** status to filter learning paths by; one of ["InProgress", "Failed", "Success", "InReview"]; defaults to an empty value */
        status: string[];
        /** list of category IDs to filter learning paths by, in the multi-param form; defaults to an empty list */
        categoryId?: number[];
        /** locale to filter learning paths by */
        locale?: string;
        /** filter learning paths by reviewRequired; defaults to an empty value */
        reviewRequired?: boolean;
        /** filter learning paths by hasLearningPoints; defaults to an empty value */
        hasLearningPoints?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/users/${id}/learning-paths-total`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description move learning path goal identified by ID to the goal group identified by **groupId**.
     *
     * @tags learning-paths, goals
     * @name MoveAGoalToAnotherGoalGroup
     * @summary Move a goal to another goal group
     * @request POST:/delegate/learning-paths/v1/goals/{id}/move
     * @secure
     * @response `201` `void` goal is moved to another group
     */
    moveAGoalToAnotherGoalGroup: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/goals/${id}/move`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description delete learning path goal by goal ID.
     *
     * @tags learning-paths, goals
     * @name DeleteALearningPathGoal
     * @summary Delete a learning path goal
     * @request DELETE:/delegate/learning-paths/v1/goals/{id}
     * @secure
     * @response `204` `void` goal is deleted
     */
    deleteALearningPathGoal: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/goals/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description update a learning path goal by ID.
     *
     * @tags learning-paths, goals
     * @name UpdateALearningPathGoal
     * @summary Update a learning path goal
     * @request PUT:/delegate/learning-paths/v1/goals/{id}
     * @secure
     * @response `200` `GoalResponse` updated goal
     */
    updateALearningPathGoal: (id: number, params: RequestParams = {}) =>
      this.request<GoalResponse, any>({
        path: `/delegate/learning-paths/v1/goals/${id}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description move goal group identified by ID to another group identified by groupId.
     *
     * @tags learning-paths, goals-group
     * @name MoveLearningPathGroupGoalToAnotherGroupById
     * @summary Move learning path group goal to another group by ID
     * @request POST:/delegate/learning-paths/v1/goal-groups/{id}/move
     * @secure
     * @response `204` `void` learning path group goal is moved
     */
    moveLearningPathGroupGoalToAnotherGroupById: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/goal-groups/${id}/move`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description create a goal in a goal group.
     *
     * @tags learning-paths, goals-group
     * @name CreateAGoalInAGoalGroup
     * @summary Create a goal in a goal group
     * @request POST:/delegate/learning-paths/v1/goal-groups/{id}/goals
     * @secure
     * @response `200` `GoalResponse` created goal
     */
    createAGoalInAGoalGroup: (id: number, params: RequestParams = {}) =>
      this.request<GoalResponse, any>({
        path: `/delegate/learning-paths/v1/goal-groups/${id}/goals`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create goal group.
     *
     * @tags learning-paths, goals-group
     * @name CreateALearningPathGoalGroup
     * @summary Create a learning path goal group
     * @request POST:/delegate/learning-paths/v1/goal-groups/{id}/groups
     * @secure
     * @response `200` `GoalsGroupResponse` created goal group
     */
    createALearningPathGoalGroup: (id: number, params: RequestParams = {}) =>
      this.request<GoalsGroupResponse, any>({
        path: `/delegate/learning-paths/v1/goal-groups/${id}/groups`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description delete goal group by group ID.
     *
     * @tags learning-paths, goals-group
     * @name DeleteLearningPathGoalGroupById
     * @summary Delete learning path goal group by ID
     * @request DELETE:/delegate/learning-paths/v1/goal-groups/{id}
     * @secure
     * @response `204` `void` learning path goal group is deleted
     */
    deleteLearningPathGoalGroupById: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/goal-groups/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description update goal group by group ID.
     *
     * @tags learning-paths, goals-group
     * @name UpdateLearningPathGoalGroupById
     * @summary Update learning path goal group by ID
     * @request PUT:/delegate/learning-paths/v1/goal-groups/{id}
     * @secure
     * @response `200` `GoalsGroupResponse` updated goal group
     */
    updateLearningPathGoalGroupById: (id: number, params: RequestParams = {}) =>
      this.request<GoalsGroupResponse, any>({
        path: `/delegate/learning-paths/v1/goal-groups/${id}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get goal group by group ID.
     *
     * @tags learning-paths, goals-group
     * @name GetLearningPathGoalGroupById
     * @summary Get learning path goal group by ID
     * @request GET:/delegate/learning-paths/v1/goal-groups/{id}
     * @secure
     * @response `200` `GoalsGroupResponse` goal group
     */
    getLearningPathGoalGroupById: (id: number, params: RequestParams = {}) =>
      this.request<GoalsGroupResponse, any>({
        path: `/delegate/learning-paths/v1/goal-groups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get user group members of the organization identified by **organizationId** marking those who are members of the learning path identified by **id**. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, available-members
 * @name GetUserGroupsByLearningPathIdAndOrganizationId
 * @summary Get user groups by learning path ID and organization ID
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/organizations/{organizationId}/groups
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (GroupResponse)[],

}` available user group members
 */
    getUserGroupsByLearningPathIdAndOrganizationId: (
      id: number,
      organizationId: number,
      query?: {
        /** user group name to filter user groups by, defaults to the empty string */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: GroupResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/organizations/${organizationId}/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get user group members of the course identified by **courseId** marking those who are members of the learning path identified by **id**. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, available-members
 * @name GetUserGroupsByLearningPathIdAndCourseId
 * @summary Get user groups by learning path ID and course ID
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/courses/{courseId}/groups
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (GroupResponse)[],

}` available user group members
 */
    getUserGroupsByLearningPathIdAndCourseId: (
      id: number,
      courseId: number,
      query?: {
        /** user group name to filter user groups by, defaults to the empty string */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: GroupResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/courses/${courseId}/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get available roles marking those which are members of the learning path identified by **id**. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, available-members
 * @name GetAvailableRolesByLearningPathId
 * @summary Get available roles by learning path ID
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/roles
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (RoleMemberResponse)[],

}` available role members
 */
    getAvailableRolesByLearningPathId: (
      id: number,
      query?: {
        /** role name to filter roles by, defaults to the empty string */
        name?: string;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: RoleMemberResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get user members of the organization identified by **organizationId** marking those who are members of the learning path identified by **id**. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, available-members
 * @name GetUsersByLearningPathIdAndOrganizationId
 * @summary Get users by learning path ID and organization ID
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/organizations/{organizationId}/users
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (UserResponse)[],

}` available user members
 */
    getUsersByLearningPathIdAndOrganizationId: (
      id: number,
      organizationId: number,
      query?: {
        /** user name to filter users by, defaults to the empty string */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: UserResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/organizations/${organizationId}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get organization members of the organization identified by **organizationId** marking those who are members of the learning path identified by **id**. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, available-members
 * @name GetOrganizationsByLearningPathIdAndParentOrganizationId
 * @summary Get organizations by learning path ID and parent organization ID
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/organizations/{organizationId}/organizations
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (GroupResponse)[],

}` available organization members
 */
    getOrganizationsByLearningPathIdAndParentOrganizationId: (
      id: number,
      organizationId: number,
      query?: {
        /** organization name to filter organizations by, defaults to the empty string */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: GroupResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/organizations/${organizationId}/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get organization members of the course identified by **courseId** marking those who are members of the learning path identified by **id**. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, available-members
 * @name GetAvailableCourseOrganizationsByLearningPathId
 * @summary Get available course organizations by learning path ID
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/courses/{courseId}/organizations
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (GroupResponse)[],

}` available organization members
 */
    getAvailableCourseOrganizationsByLearningPathId: (
      id: number,
      courseId: number,
      query?: {
        /** organization name to filter organizations by, defaults to the empty string */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: GroupResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/courses/${courseId}/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get user members of the course identified by **courseId** marking those who are members of the learning path identified by **id**. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, available-members
 * @name GetAvailableCourseUsersByLearningPathIdAndCourseId
 * @summary Get available course users by learning path ID and course ID
 * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/courses/{courseId}/users
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (UserResponse)[],

}` available user members
 */
    getAvailableCourseUsersByLearningPathIdAndCourseId: (
      id: number,
      courseId: number,
      query?: {
        /** user name to filter users by, defaults to the empty string */
        name?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: UserResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/courses/${courseId}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get languages used in learning paths found by filter.
     *
     * @tags learning-paths, learning-paths-languages
     * @name GetLearningPathLanguages
     * @summary Get learning path languages
     * @request GET:/delegate/learning-paths/v1/learning-paths-languages
     * @secure
     * @response `200` `(string)[]` list of languages
     */
    getLearningPathLanguages: (
      query?: {
        /** text to search in learning path titles; defaults to an empty value */
        title?: string;
        /**
         * course ID to filter learning paths by; defaults to an empty value
         * @format int64
         */
        courseId?: number;
        /**
         * user ID to filter learning paths by; defaults to an empty value
         * @format int64
         */
        userId?: number;
        /** whether to search only published learning paths; defaults to an empty value, will result in searching for both published and draft learning paths */
        published?: boolean;
        /** whether to search only active learning paths; defaults to an empty value, will result in searching for both active and inactive learning paths */
        activated?: boolean;
        /**
         * ID of the user, enables positive membership check when searching; defaults to an empty value
         * @format int64
         */
        memberId?: number;
        /**
         * ID of the user, enables negative membership check when searching; defaults to an empty value
         * @format int64
         */
        notMemberId?: number;
        /** list of category IDs to filter learning paths by, in multi-param form. Each param is a string with one or more category ID combined with "&#124;" char (boolean OR). To exclude some categories need to use "!" char before category ID, in this case only one ID in param is allowed. For example: categoryIds[]=22&#124;33&#124;434&categoryIds[]=99&categoryIds[]=!77 */
        categoryIds?: string[];
        /** locale to filter learning paths by, in BCP 47 language tag format - xx-XX; defaults to an empty value */
        locale?: string;
        /** filter learning paths by reviewRequired; defaults to an empty value */
        reviewRequired?: boolean;
        /** filter learning paths by hasLearningPoints; defaults to an empty value */
        hasLearningPoints?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], any>({
        path: `/delegate/learning-paths/v1/learning-paths-languages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description delete learning path draft logo by learning path ID.
     *
     * @tags learning-paths, learning-paths-logo
     * @name DeleteLearningPathDraftLogo
     * @summary Delete learning path draft logo
     * @request DELETE:/delegate/learning-paths/v1/logo-files/{id}/draft/logo
     * @secure
     * @response `204` `void` learning path draft logo is deleted
     */
    deleteLearningPathDraftLogo: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/logo-files/${id}/draft/logo`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description set learning path draft logo by learning path ID.
     *
     * @tags learning-paths, learning-paths-logo
     * @name SetLearningPathDraftLogo
     * @summary Set learning path draft logo
     * @request PUT:/delegate/learning-paths/v1/logo-files/{id}/draft/logo
     * @secure
     * @response `200` `void` [[Map[String, String]]] updated logo in object format {"logoUrl": "logo-url-goes-here"}
     */
    setLearningPathDraftLogo: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/logo-files/${id}/draft/logo`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description get learning path logo by learning path ID.
     *
     * @tags learning-paths, learning-paths-logo
     * @name GetLearningPathLogoById
     * @summary Get learning path logo by ID
     * @request GET:/delegate/learning-paths/v1/logo-files/{id}/logo
     * @secure
     * @response `302` `void` learning path logo is found
     */
    getLearningPathLogoById: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/delegate/learning-paths/v1/logo-files/${id}/logo`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description get learning path logo file stream by logo file name.
     *
     * @tags learning-paths, learning-paths-logo
     * @name GetLearningPathLogoByName
     * @summary Get learning path logo by name
     * @request GET:/delegate/learning-paths/v1/logo-files/{logoName}
     * @secure
     * @response `200` `InputStream` logo input stream
     */
    getLearningPathLogoByName: (logoName: string, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/delegate/learning-paths/v1/logo-files/${logoName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description update learning path draft.
     *
     * @tags learning-paths, learning-path-draft
     * @name UpdateLearningPathDraft
     * @summary Update learning path draft
     * @request PUT:/delegate/learning-paths/v1/learning-paths/{id}/draft
     * @secure
     * @response `200` `LPResponse` updated learning path draft
     */
    updateLearningPathDraft: (id: string, params: RequestParams = {}) =>
      this.request<LPResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/draft`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create learning path draft.
     *
     * @tags learning-paths, learning-path-draft
     * @name CreateLearningPathDraft
     * @summary Create learning path draft
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/draft
     * @secure
     * @response `200` `LPResponse` created learning path draft
     */
    createLearningPathDraft: (id: number, params: RequestParams = {}) =>
      this.request<LPResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/draft`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get learning path draft by learning path ID.
     *
     * @tags learning-paths, learning-path-draft
     * @name GetLearningPathDraft
     * @summary Get learning path draft
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/draft
     * @secure
     * @response `200` `LPResponse` learning path draft
     */
    getLearningPathDraft: (id: number, params: RequestParams = {}) =>
      this.request<LPResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/draft`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get goal tree of the learning path draft by learning path ID.
     *
     * @tags learning-paths, learning-path-draft
     * @name GetLearningPathDraftGoalTree
     * @summary Get learning path draft goal tree
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/draft/goals/tree
     * @secure
     * @response `200` `(GoalResponse)[]` list of draft goals
     */
    getLearningPathDraftGoalTree: (id: number, params: RequestParams = {}) =>
      this.request<GoalResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/draft/goals/tree`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create a goal group in the learning path draft.
     *
     * @tags learning-paths, learning-path-draft
     * @name CreateAGoalGroupInTheLearningPathDraft
     * @summary Create a goal group in the learning path draft
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/draft/groups
     * @secure
     * @response `200` `GoalResponse` created goal group
     */
    createAGoalGroupInTheLearningPathDraft: (id: string, params: RequestParams = {}) =>
      this.request<GoalResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/draft/groups`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description publish learning path draft.
     *
     * @tags learning-paths, learning-path-draft
     * @name PublishLearningPathDraft
     * @summary Publish learning path draft
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/draft/publish
     * @secure
     * @response `202` `void` learning path draft is published
     */
    publishLearningPathDraft: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/draft/publish`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description create a goal in the learning path draft.
     *
     * @tags learning-paths, learning-path-draft
     * @name CreateAGoalInTheLearningPathDraft
     * @summary Create a goal in the learning path draft
     * @request POST:/delegate/learning-paths/v1/learning-paths/{id}/draft/goals
     * @secure
     * @response `200` `GoalResponse` created goal
     */
    createAGoalInTheLearningPathDraft: (id: number, params: RequestParams = {}) =>
      this.request<GoalResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/draft/goals`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of improving competences of a learning path version by version ID.
     *
     * @tags learning-paths, version
     * @name GetListOfImprovingCompetencesForLearningPathVersion
     * @summary Get list of improving competences for learning path version
     * @request GET:/delegate/learning-paths/v1/versions/{id}/improving-competences
     * @secure
     * @response `200` `(Competence)[]` list of competences to be improved after completing the learning path version
     */
    getListOfImprovingCompetencesForLearningPathVersion: (id: number, params: RequestParams = {}) =>
      this.request<Competence[], any>({
        path: `/delegate/learning-paths/v1/versions/${id}/improving-competences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of recommended competences of a learning path version by version ID.
     *
     * @tags learning-paths, version
     * @name GetListOfRecommendedCompetencesForLearningPathVersion
     * @summary Get list of recommended competences for learning path version
     * @request GET:/delegate/learning-paths/v1/versions/{id}/recommended-competences
     * @secure
     * @response `200` `(Competence)[]` list of competences recommended for the learning path version
     */
    getListOfRecommendedCompetencesForLearningPathVersion: (id: number, params: RequestParams = {}) =>
      this.request<Competence[], any>({
        path: `/delegate/learning-paths/v1/versions/${id}/recommended-competences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of required competences of the learning path version by version ID.
     *
     * @tags learning-paths, version
     * @name GetListOfRequiredCompetencesForLearningPathVersion
     * @summary Get list of required competences for learning path version
     * @request GET:/delegate/learning-paths/v1/versions/{id}/required-competences
     * @secure
     * @response `200` `(Competence)[]` list of competences required by the learning path version
     */
    getListOfRequiredCompetencesForLearningPathVersion: (id: number, params: RequestParams = {}) =>
      this.request<Competence[], any>({
        path: `/delegate/learning-paths/v1/versions/${id}/required-competences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get goal tree of a learning path version by version ID.
     *
     * @tags learning-paths, version
     * @name GetLearningPathVersionGoalTree
     * @summary Get learning path version goal tree
     * @request GET:/delegate/learning-paths/v1/versions/{id}/goals/tree
     * @secure
     * @response `200` `(GoalResponse)[]` list of learning path version goals
     */
    getLearningPathVersionGoalTree: (id: number, params: RequestParams = {}) =>
      this.request<GoalResponse[], any>({
        path: `/delegate/learning-paths/v1/versions/${id}/goals/tree`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get users statistics report by learning path ID. in case sorting value starts with "-" the result items will be sorted in descending order regarding the value, otherwise in ascending order
 *
 * @tags learning-paths, statistic-report
 * @name GetUsersStatisticsReportForLearningPaths
 * @summary Get users statistics report for learning paths
 * @request GET:/delegate/learning-paths/v1/learning-statistics-report/learning-paths
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (LPWithStatisticsResponse)[],

}` range of user statistic reports
 */
    getUsersStatisticsReportForLearningPaths: (
      query: {
        /** text to search in learning path titles; defaults to an empty value */
        title?: string;
        /** course ID to filter learning path by, in multi-param form; defaults to an empty value */
        courseId: number[];
        /**
         * user ID to filter learning path by; defaults to an empty value
         * @format int64
         */
        userId?: number;
        /** list of user statuses to filter learning paths by, in the multi-param form; defaults to an empty list */
        status?: string;
        /** list of category IDs to filter learning paths by, in multi-param form; defaults to an empty list */
        categoryId?: number[];
        /** list of category IDs to filter learning paths by, in multi-param form. Each param is a string with one or more category ID combined with "|" char (boolean OR). To exclude some categories need to use "!" char before category ID, in this case only one ID in param is allowed. For example: categoryIds[]=22|33|434&categoryIds[]=99&categoryIds[]=!77 */
        categoryIds?: string[];
        /** locale to filter learning paths by; defaults to an empty value */
        locale?: string;
        /** filter learning paths by reviewRequired; defaults to an empty value */
        reviewRequired?: boolean;
        /** filter learning paths by hasLearningPoints; defaults to an empty value */
        hasLearningPoints?: boolean;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["title", "-title", "createdDate", "-createdDate", "modifiedDate", "-modifiedDate", "statusInProgress", "-statusInProgress", "statusFailed", "-statusFailed", "statusSuccess", "-statusSuccess", "statusInReview", "-statusInReview", "membersCount", "-membersCount"]
         * @default "title"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: LPWithStatisticsResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-statistics-report/learning-paths`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get users statistics report by learning path ID. in case of "name" entries in result will go in ascending order and in case of "-name" they will go in descending order
 *
 * @tags learning-paths, statistic-report
 * @name GetUsersStatisticsReportForLearningPathById
 * @summary Get users statistics report for learning path by ID
 * @request GET:/delegate/learning-paths/v1/learning-statistics-report/learning-paths/{id}/users
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (UsersWithStatisticsResponse)[],

}` range of users with statistics
 */
    getUsersStatisticsReportForLearningPathById: (
      id: number,
      query?: {
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * sorting order; one of ["name", "-name"]
         * @default "name"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: UsersWithStatisticsResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-statistics-report/learning-paths/${id}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get total certificates statuses from the organization by organization ID.
     *
     * @tags learning-paths, learning-pattern-report
     * @name GetCertificatesTotalStatusesFromTheOrganization
     * @summary Get certificates total statuses from the organization
     * @request GET:/delegate/learning-paths/v1/learning-pattern-report/organizations/{organizationId}/certificates-total-statuses
     * @secure
     * @response `200` `(TotalResponse)[]` total certificate statuses
     */
    getCertificatesTotalStatusesFromTheOrganization: (
      organizationId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TotalResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-pattern-report/organizations/${organizationId}/certificates-total-statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get users total statuses from the course by course ID.
     *
     * @tags learning-paths, learning-pattern-report
     * @name GetLearningPathsTotalUsersStatusesFromTheCourse
     * @summary Get learning paths total users statuses from the course
     * @request GET:/delegate/learning-paths/v1/learning-pattern-report/courses/{courseId}/certificates-total-status
     * @secure
     * @response `200` `(TotalResponse)[]` list of users status totals
     */
    getLearningPathsTotalUsersStatusesFromTheCourse: (
      courseId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TotalResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-pattern-report/courses/${courseId}/certificates-total-status`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get users total statuses from the course by course ID.
     *
     * @tags learning-paths, learning-pattern-report
     * @name GetUsersTotalStatusFromTheCourse
     * @summary Get users total status from the course
     * @request GET:/delegate/learning-paths/v1/learning-pattern-report/courses/{courseId}/users-total-status
     * @secure
     * @response `200` `(TotalResponse)[]` list of user status totals for the course
     */
    getUsersTotalStatusFromTheCourse: (
      courseId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TotalResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-pattern-report/courses/${courseId}/users-total-status`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get users statuses from the organization by organization ID.
 *
 * @tags learning-paths, learning-pattern-report
 * @name GetLearningPathsUsersStatusesFromTheOrganization
 * @summary Get learning paths users statuses from the organization
 * @request GET:/delegate/learning-paths/v1/learning-pattern-report/organizations/{organizationId}/users-statuses
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (UserStatusResponse)[],

}` range of learning path user statuses
 */
    getLearningPathsUsersStatusesFromTheOrganization: (
      organizationId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: UserStatusResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-pattern-report/organizations/${organizationId}/users-statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get users goals statuses for a learning path from the organization by organization ID.
     *
     * @tags learning-paths, learning-pattern-report
     * @name GetUsersGoalsStatusesForALearningPathFromTheOrganization
     * @summary Get users goals statuses for a learning path from the organization
     * @request GET:/delegate/learning-paths/v1/learning-pattern-report/organizations/{organizationId}/certificates/{lpId}/users-goals-statuses
     * @secure
     * @response `200` `(UserGoalStatusResponse)[]` list of user goal statuses
     */
    getUsersGoalsStatusesForALearningPathFromTheOrganization: (
      organizationId: number,
      lpId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserGoalStatusResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-pattern-report/organizations/${organizationId}/certificates/${lpId}/users-goals-statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get users goals statuses for a learning path from the course by course ID.
     *
     * @tags learning-paths, learning-pattern-report
     * @name GetUsersGoalsStatusesForALearningPathFromTheCourse
     * @summary Get users goals statuses for a learning path from the course
     * @request GET:/delegate/learning-paths/v1/learning-pattern-report/courses/{courseId}/certificates/{lpId}/users-goals-statuses
     * @secure
     * @response `200` `(UserGoalStatus)[]` range of user goal statuses
     */
    getUsersGoalsStatusesForALearningPathFromTheCourse: (
      courseId: number,
      lpId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserGoalStatus[], any>({
        path: `/delegate/learning-paths/v1/learning-pattern-report/courses/${courseId}/certificates/${lpId}/users-goals-statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get learning paths from the course by course ID.
 *
 * @tags learning-paths, learning-pattern-report
 * @name GetLearningPathsFromTheCourse
 * @summary Get learning paths from the course
 * @request GET:/delegate/learning-paths/v1/learning-pattern-report/courses/{courseId}/certificates
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (LearningPathGoalsResponse)[],

}` learning path summaries along with corresponding goals
 */
    getLearningPathsFromTheCourse: (
      courseId: number,
      query?: {
        /** text to filter learning path title by; defaults to empty */
        filter?: string;
        /** type of the the goal to filter by; one of ["group", "lesson", "activity", "assignment", "webContent", "trainingEvent", "statement", "course", "learningPath", "edxCourse", "form", "baseEntity"] */
        goalType?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: LearningPathGoalsResponse[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-pattern-report/courses/${courseId}/certificates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get users goals total statuses for a learning path from the organization by organization ID.
     *
     * @tags learning-paths, learning-pattern-report
     * @name GetUsersGoalsTotalStatusesForALearningPathFromTheOrganization
     * @summary Get users goals total statuses for a learning path from the organization
     * @request GET:/delegate/learning-paths/v1/learning-pattern-report/organizations/{organizationId}/certificates/{lpId}/users-goals-total-status
     * @secure
     * @response `200` `(TotalResponse)[]` list of organization total statuses
     */
    getUsersGoalsTotalStatusesForALearningPathFromTheOrganization: (
      organizationId: number,
      lpId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TotalResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-pattern-report/organizations/${organizationId}/certificates/${lpId}/users-goals-total-status`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get users statuses from the course by course ID.
 *
 * @tags learning-paths, learning-pattern-report
 * @name GetLearningPathsUsersStatusesFromTheCourse
 * @summary Get learning paths users statuses from the course
 * @request GET:/delegate/learning-paths/v1/learning-pattern-report/courses/{courseId}/users-statuses
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (UserStatus)[],

}` range of user statuses
 */
    getLearningPathsUsersStatusesFromTheCourse: (
      courseId: number,
      query?: {
        /** text to filter users by; defaults to empty */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: UserStatus[];
        },
        any
      >({
        path: `/delegate/learning-paths/v1/learning-pattern-report/courses/${courseId}/users-statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get users goals total statuses for a learning path from the course by course ID.
     *
     * @tags learning-paths, learning-pattern-report
     * @name GetUsersGoalsTotalStatusesForALearningPathFromTheCourse
     * @summary Get users goals total statuses for a learning path from the course
     * @request GET:/delegate/learning-paths/v1/learning-pattern-report/courses/{courseId}/certificates/{lpId}/users-goals-total-status
     * @secure
     * @response `200` `(TotalResponse)[]` list of user goal status totals
     */
    getUsersGoalsTotalStatusesForALearningPathFromTheCourse: (
      courseId: number,
      lpId: number,
      params: RequestParams = {},
    ) =>
      this.request<TotalResponse[], any>({
        path: `/delegate/learning-paths/v1/learning-pattern-report/courses/${courseId}/certificates/${lpId}/users-goals-total-status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get learning path user member permissions by learning path ID and user ID, which include "view", "update", "delete" and "is user responsible for user" permissions.
     *
     * @tags learning-paths, member-permissions
     * @name GetLearningPathUserMemberPermissions
     * @summary Get learning path user member permissions
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/members/users/{userId}/progress/permissions
     * @secure
     * @response `200` `MemberPermissions` member permissions
     */
    getLearningPathUserMemberPermissions: (id: number, userId: number, params: RequestParams = {}) =>
      this.request<MemberPermissions, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/members/users/${userId}/progress/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of key-value pairs with human readable title for activities.
     *
     * @tags learning-paths, liferay-activities
     * @name GetListOfKeyValuePairsWithHumanReadableTitleForActivities
     * @summary Get list of key-value pairs with human readable title for activities
     * @request GET:/delegate/learning-paths/v1/lr-activity-types
     * @secure
     * @response `200` `(LRActivityType)[]` list of liferay activity titles
     */
    getListOfKeyValuePairsWithHumanReadableTitleForActivities: (params: RequestParams = {}) =>
      this.request<LRActivityType[], any>({
        path: `/delegate/learning-paths/v1/lr-activity-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description view form as a resource by form ID.
     *
     * @tags learning-paths, forms
     * @name ViewFormById
     * @summary View form by ID
     * @request GET:/delegate/learning-paths/v1/forms/{id}/view
     * @secure
     * @response `302` `void` Redirect to liferay form
     */
    viewFormById: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/delegate/learning-paths/v1/forms/${id}/view`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description get form by form ID.
     *
     * @tags learning-paths, forms
     * @name GetFormById
     * @summary Get form by ID
     * @request GET:/delegate/learning-paths/v1/forms/{id}
     * @secure
     * @response `200` `Form` form
     */
    getFormById: (id: number, params: RequestParams = {}) =>
      this.request<Form, any>({
        path: `/delegate/learning-paths/v1/forms/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get forms by filter with sorting.
     *
     * @tags learning-paths, forms
     * @name GetFormsByFilter
     * @summary Get forms by filter
     * @request GET:/delegate/learning-paths/v1/forms
     * @secure
     * @response `200` `Any` range of filtered forms
     */
    getFormsByFilter: (
      query?: {
        /**
         * ID of the corresponding course; defaults to 0
         * @format int64
         */
        courseId?: number;
        /** form title filter */
        filter?: string;
        /**
         * sorting order; one of ["title", "-title"]
         * @default "title"
         */
        sort?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/learning-paths/v1/forms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get LRS endpoint settings.
     *
     * @tags learning-paths, lrs-endpoint
     * @name GetLrsEndpointSettings
     * @summary Get LRS endpoint settings
     * @request GET:/delegate/learning-paths/v1/lrs-settings
     * @secure
     * @response `200` `LrsSettingsResponse` lrs endpoint settings
     */
    getLrsEndpointSettings: (params: RequestParams = {}) =>
      this.request<LrsSettingsResponse, any>({
        path: `/delegate/learning-paths/v1/lrs-settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get learning paths build info; returns an object {"version":"x1.y1.z1","api-version":x2.y2.z2}, where xK.yM.zN are the portlet version and the current API version retrieved from build info
     *
     * @tags learning-paths, about
     * @name GetLearningPathBuildInfo
     * @summary Get learning path build info
     * @request GET:/delegate/learning-paths/about
     * @secure
     * @response `200` `Record<string,string>` learning paths build info
     */
    getLearningPathBuildInfo: (params: RequestParams = {}) =>
      this.request<Record<string, string>, any>({
        path: `/delegate/learning-paths/about`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get e-commerce info for learning path by learning path ID.
     *
     * @tags learning-paths, e-commerce
     * @name GetECommerceInfoForLearningPath
     * @summary Get e-commerce info for learning path
     * @request GET:/delegate/learning-paths/v1/learning-paths/{id}/ecommerce-info
     * @secure
     * @response `200` `EcommerceResponse` e-commerce info
     */
    getECommerceInfoForLearningPath: (id: number, params: RequestParams = {}) =>
      this.request<EcommerceResponse, any>({
        path: `/delegate/learning-paths/v1/learning-paths/${id}/ecommerce-info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description restore missing learning path statuses by learning path ID; returns an object {"count":N}, where N is the number of missing statuses that have been restored
     *
     * @tags learning-paths, admin
     * @name RestoreMissingLearningPathStatusesByLearningPathId
     * @summary Restore missing learning path statuses by learning path ID
     * @request POST:/delegate/learning-paths/v1/admin/learning-paths/{id}/restore-missing-statuses
     * @secure
     * @response `200` `Record<string,number>` restored statuses report
     */
    restoreMissingLearningPathStatusesByLearningPathId: (id: number, params: RequestParams = {}) =>
      this.request<Record<string, number>, any>({
        path: `/delegate/learning-paths/v1/admin/learning-paths/${id}/restore-missing-statuses`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description repopulate all entities of given type to its kafka topic.
     *
     * @tags learning-paths, admin
     * @name RepopulateRequestedEntitiesToItsTopics
     * @summary Repopulate requested entities to its topics
     * @request POST:/delegate/learning-paths/v1/admin/repopulate/{entityType}
     * @secure
     * @response `204` `void` repopulate given entities to its topic
     */
    repopulateRequestedEntitiesToItsTopics: (entityType: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/admin/repopulate/${entityType}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description recalculate learning path goal statuses and progress by learning path ID for all goals for giver user ID.
     *
     * @tags learning-paths, admin
     * @name RecalculateStatusAndProgressOfAllGoalsOfGivenLearningPathIdForUser
     * @summary Recalculate status and progress of all goals of given learning path ID for user
     * @request POST:/delegate/learning-paths/v1/admin/learning-paths/{id}/users/{userId}/recalculate-goal-status
     * @secure
     * @response `204` `void` progresses and statuses are recalculated
     */
    recalculateStatusAndProgressOfAllGoalsOfGivenLearningPathIdForUser: (
      id: number,
      userId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/admin/learning-paths/${id}/users/${userId}/recalculate-goal-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description recalculate learning path status and progress by learning path ID for giver user ID.
     *
     * @tags learning-paths, admin
     * @name RecalculateGivenLearningPathProgressAndStatusForUser
     * @summary Recalculate given learning path progress and status for user
     * @request POST:/delegate/learning-paths/v1/admin/learning-paths/{id}/users/{userId}/recalculate-status
     * @secure
     * @response `204` `void` progress and status are recalculated
     */
    recalculateGivenLearningPathProgressAndStatusForUser: (id: number, userId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/admin/learning-paths/${id}/users/${userId}/recalculate-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description recalculate learning path goal statuses and progress by learning path ID for all goals for all learning path users.
     *
     * @tags learning-paths, admin
     * @name RecalculateStatusAndProgressOfAllGoalsOfGivenLearningPathIdForAllLearningPathUsers
     * @summary Recalculate status and progress of all goals of given learning path ID for all learning path users
     * @request POST:/delegate/learning-paths/v1/admin/learning-paths/{id}/recalculate-goal-status
     * @secure
     * @response `204` `void` progresses and statuses are recalculated
     */
    recalculateStatusAndProgressOfAllGoalsOfGivenLearningPathIdForAllLearningPathUsers: (
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/admin/learning-paths/${id}/recalculate-goal-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description recalculate learning path goal status and progress by learning path ID, goal ID for all learning path users.
     *
     * @tags learning-paths, admin
     * @name RecalculateStatusAndProgressOfGivenGoalIdOfGivenLearningPathIdForAllLearningPathUsers
     * @summary Recalculate status and progress of given goal ID of given learning path ID for all learning path users
     * @request POST:/delegate/learning-paths/v1/admin/learning-paths/{id}/goals/{goalId}/recalculate-goal-status
     * @secure
     * @response `204` `void` progress and status are recalculated
     */
    recalculateStatusAndProgressOfGivenGoalIdOfGivenLearningPathIdForAllLearningPathUsers: (
      id: number,
      goalId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/admin/learning-paths/${id}/goals/${goalId}/recalculate-goal-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description recalculate learning path status and progress by learning path ID for all learning path users.
     *
     * @tags learning-paths, admin
     * @name RecalculateGivenLearningPathProgressAndStatusForAllLearningPathUsers
     * @summary Recalculate given learning path progress and status for all learning path users
     * @request POST:/delegate/learning-paths/v1/admin/learning-paths/{id}/recalculate-status
     * @secure
     * @response `204` `void` progress and status are recalculated
     */
    recalculateGivenLearningPathProgressAndStatusForAllLearningPathUsers: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/admin/learning-paths/${id}/recalculate-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description recalculate learning path goal status and progress by learning path ID, goal ID for giver user ID.
     *
     * @tags learning-paths, admin
     * @name RecalculateStatusAndProgressOfGivenGoalIdOfGivenLearningPathIdForUser
     * @summary Recalculate status and progress of given goal ID of given learning path ID for user
     * @request POST:/delegate/learning-paths/v1/admin/learning-paths/{id}/goals/{goalId}/users/{userId}/recalculate-goal-status
     * @secure
     * @response `204` `void` progress and status are recalculated
     */
    recalculateStatusAndProgressOfGivenGoalIdOfGivenLearningPathIdForUser: (
      id: number,
      goalId: number,
      userId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/delegate/learning-paths/v1/admin/learning-paths/${id}/goals/${goalId}/users/${userId}/recalculate-goal-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson, result
     * @name ReturnsRecentLessonsByUserId
     * @summary Returns recent lessons by user id
     * @request GET:/delegate/lesson-results/users/{userId}/recent-lessons
     * @secure
     * @response `200` `(RecentLesson)[]` Array of last user lessons
     */
    returnsRecentLessonsByUserId: (
      userId: number,
      query: {
        /**
         * Amount of lessons
         * @format int64
         */
        count: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RecentLesson[], any>({
        path: `/delegate/lesson-results/users/${userId}/recent-lessons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson, result
     * @name ReturnsUserLessonStatusByUserIdAndLessonId
     * @summary Returns user-lesson status by user id and lesson id
     * @request GET:/delegate/lesson-results/users/{userId}/lessons/{lessonId}/status
     * @secure
     * @response `200` `LessonStatus` Status of the lesson
     * @response `404` `void` User, lesson or result was not found
     */
    returnsUserLessonStatusByUserIdAndLessonId: (userId: number, lessonId: number, params: RequestParams = {}) =>
      this.request<LessonStatus, void>({
        path: `/delegate/lesson-results/users/${userId}/lessons/${lessonId}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson, result
     * @name ReturnsUserLessonResultInfoByUserIdAndLessonId
     * @summary Returns user-lesson result info by user id and lesson id
     * @request GET:/delegate/lesson-results/users/{userId}/lessons/{lessonId}/lesson-result
     * @secure
     * @response `200` `UserLessonResult` Lesson result
     * @response `404` `void` User, lesson or result was not found
     */
    returnsUserLessonResultInfoByUserIdAndLessonId: (userId: number, lessonId: number, params: RequestParams = {}) =>
      this.request<UserLessonResult, void>({
        path: `/delegate/lesson-results/users/${userId}/lessons/${lessonId}/lesson-result`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson
     * @name ReturnsAllLessons
     * @summary Returns all lessons
     * @request GET:/delegate/valamis-lessons/lessons
     * @secure
     * @response `200` `(Lesson)[]` Array of lessons
     */
    returnsAllLessons: (
      query?: {
        /**
         * Course of a lesson
         * @format int64
         */
        courseId?: number;
        /** Type of a lesson */
        lessonType?: string;
        /**
         * Start index of lesson
         * @format int64
         */
        start?: number;
        /**
         * Amount of lessons
         * @format int64
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Lesson[], any>({
        path: `/delegate/valamis-lessons/lessons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson
     * @name ReturnsLessonById
     * @summary Returns lesson by id
     * @request GET:/delegate/valamis-lessons/lessons/{id}/
     * @secure
     * @response `200` `Lesson` Lesson
     * @response `404` `void` Lesson was not found
     */
    returnsLessonById: (id: number, params: RequestParams = {}) =>
      this.request<Lesson, void>({
        path: `/delegate/valamis-lessons/lessons/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson
     * @name ReturnsActivityIdByLessonId
     * @summary Returns activity id by lesson id
     * @request GET:/delegate/valamis-lessons/lessons/{id}/root-activity-ids
     * @secure
     * @response `200` `LessonActivityId` Lesson activity id
     * @response `404` `void` Lesson was not found
     */
    returnsActivityIdByLessonId: (id: number, params: RequestParams = {}) =>
      this.request<LessonActivityId, void>({
        path: `/delegate/valamis-lessons/lessons/${id}/root-activity-ids`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson, permission
     * @name ReturnsLessonPermissionsByLessonId
     * @summary Returns lesson permissions by lesson id
     * @request GET:/delegate/valamis-lessons/lessons/{id}/permissions
     * @secure
     * @response `200` `LessonPermissions` Lesson permissions
     * @response `404` `void` Lesson was not found
     */
    returnsLessonPermissionsByLessonId: (id: number, params: RequestParams = {}) =>
      this.request<LessonPermissions, void>({
        path: `/delegate/valamis-lessons/lessons/${id}/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson, download
     * @name ReturnsZipFileWithLessonContentByLessonId
     * @summary Returns zip file with lesson content by lesson id
     * @request GET:/delegate/valamis-lessons/lessons/{id}/package
     * @secure
     * @response `200` `void` [Array[Byte]] Zip package
     */
    returnsZipFileWithLessonContentByLessonId: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/valamis-lessons/lessons/${id}/package`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson, rating
     * @name ReturnsLessonRatingByLessonId
     * @summary Returns lesson rating by lesson id
     * @request GET:/delegate/valamis-lessons/lessons/{id}/rating
     * @secure
     * @response `200` `Rating` [Rating] Average and current user rating
     * @response `404` `void` Lesson was not found
     */
    returnsLessonRatingByLessonId: (id: number, params: RequestParams = {}) =>
      this.request<Rating, void>({
        path: `/delegate/valamis-lessons/lessons/${id}/rating`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lesson, download, image
     * @name ReturnsLogoImageByLessonId
     * @summary Returns logo image by lesson id
     * @request GET:/delegate/valamis-lessons/{id}/logo
     * @secure
     * @response `200` `void` [Array[Byte]] Logo image file
     * @response `404` `void` Lesson or logo was not found
     */
    returnsLogoImageByLessonId: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/valamis-lessons/${id}/logo`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Obtain list of Integration types
     *
     * @tags integration, cpi
     * @name IntegrationTypes
     * @summary Integration types
     * @request GET:/delegate/integration
     * @secure
     * @response `200` `Any` IntegrationTypes
     */
    integrationTypes: (
      query?: {
        /** integration enabled flag */
        enabled?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/integration`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain IntegrationType by id
     *
     * @tags integration, cpi
     * @name IntegrationTypeById
     * @summary Integration type by id
     * @request GET:/delegate/integration/{typ}
     * @secure
     * @response `200` `Any` IntegrationType
     */
    integrationTypeById: (typ: string, params: RequestParams = {}) =>
      this.request<Any, any>({
        path: `/delegate/integration/${typ}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain one course for given integration type by URN. Internal use only
     *
     * @tags integration, cpi
     * @name IntegrationSpecificCourseData
     * @summary Integration specific course data
     * @request GET:/delegate/integration/{typ}/manage/course/{urn}
     * @secure
     * @response `200` `CourseDTO` Course
     */
    integrationSpecificCourseData: (typ: string, urn: string, params: RequestParams = {}) =>
      this.request<CourseDTO, any>({
        path: `/delegate/integration/${typ}/manage/course/${urn}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update given integration type specific course from CourseDTO provided as body parameter
     *
     * @tags integration, cpi
     * @name UpdateGivenIntegrationTypeSpecificCourse
     * @summary Update given integration type specific course
     * @request PATCH:/delegate/integration/{typ}/manage/course/{id}
     * @secure
     * @response `200` `CourseDTO` Course
     */
    updateGivenIntegrationTypeSpecificCourse: (typ: string, id: string, data: CourseDTO, params: RequestParams = {}) =>
      this.request<CourseDTO, any>({
        path: `/delegate/integration/${typ}/manage/course/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update given integration type specific courses from array of CourseDTO provided as body parameter
     *
     * @tags integration, cpi
     * @name UpdateGivenIntegrationTypeSpecificCourses
     * @summary Update given integration type specific courses
     * @request POST:/delegate/integration/{typ}/manage/course
     * @secure
     * @response `200` `(CourseDTO)[]` Course
     */
    updateGivenIntegrationTypeSpecificCourses: (typ: string, data: CourseDTO[], params: RequestParams = {}) =>
      this.request<CourseDTO[], any>({
        path: `/delegate/integration/${typ}/manage/course`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain Courses for given integration type
     *
     * @tags integration, cpi
     * @name IntegrationSpecificCoursesListing
     * @summary Integration specific courses listing
     * @request GET:/delegate/integration/{typ}/manage/course
     * @secure
     * @response `200` `CoursePackDTO` CoursePack
     */
    integrationSpecificCoursesListing: (typ: string, params: RequestParams = {}) =>
      this.request<CoursePackDTO, any>({
        path: `/delegate/integration/${typ}/manage/course`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description For a certain integration type, obtain user's results in a course.
     *
     * @tags integration, cpi
     * @name GetUserResultsForCourse
     * @summary Get user's results for course
     * @request GET:/delegate/integration/{typ}/user/{userId}/course/{urn}
     * @secure
     * @response `200` `Result` Course Result for user
     */
    getUserResultsForCourse: (typ: string, userId: number, urn: string, params: RequestParams = {}) =>
      this.request<Result, any>({
        path: `/delegate/integration/${typ}/user/${userId}/course/${urn}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description For a certain integration type, obtain user's results in a course.
     *
     * @tags integration, cpi
     * @name UpdateUserResultsForCourseInCompany
     * @summary Get user's results for course
     * @request PUT:/delegate/integration/{typ}/user/{userId}/course/{urn}/company/{companyId}
     * @secure
     * @response `200` `Result` Course Result for user
     */
    updateUserResultsForCourseInCompany: (
      typ: string,
      userId: string,
      urn: string,
      companyId: string,
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/delegate/integration/${typ}/user/${userId}/course/${urn}/company/${companyId}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Trigger hard synchronization process of with integration of given type. Old data is erased.
     *
     * @tags integration, cpi
     * @name HardSyncOfData
     * @summary Hard sync of data
     * @request POST:/delegate/integration/{typ}/resync
     * @secure
     * @response `200` `Unit` empty response
     */
    hardSyncOfData: (typ: string, params: RequestParams = {}) =>
      this.request<Unit, any>({
        path: `/delegate/integration/${typ}/resync`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Check if there is a sync process with the same type and company id running at the moment
     *
     * @tags integration, cpi
     * @name CheckIfSyncRunning
     * @summary Check if sync running
     * @request GET:/delegate/integration/{typ}/sync/status
     * @secure
     * @response `200` `boolean` check result
     */
    checkIfSyncRunning: (typ: string, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/delegate/integration/${typ}/sync/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a scheduled task for planned synchronization
     *
     * @tags integration, cpi
     * @name ScheduleSynchronisation
     * @summary Schedule synchronisation
     * @request POST:/delegate/integration/{typ}/sync/plan
     * @secure
     * @response `200` `Unit` empty response
     */
    scheduleSynchronisation: (typ: string, params: RequestParams = {}) =>
      this.request<Unit, any>({
        path: `/delegate/integration/${typ}/sync/plan`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Trigger soft synchronization process of with integration of given type
     *
     * @tags integration, cpi
     * @name SoftSyncOfData
     * @summary Soft sync of data
     * @request POST:/delegate/integration/{typ}/update
     * @secure
     * @response `200` `Unit` empty response
     */
    softSyncOfData: (typ: string, params: RequestParams = {}) =>
      this.request<Unit, any>({
        path: `/delegate/integration/${typ}/update`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain version of the CPI Integration portlet and version of the API
     *
     * @tags integration, cpi
     * @name VersionInformation
     * @summary Version information
     * @request GET:/delegate/integration/about
     * @secure
     * @response `200` `Map` Version Information
     */
    versionInformation: (params: RequestParams = {}) =>
      this.request<Map, any>({
        path: `/delegate/integration/about`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain courses for given integration type and query filters
     *
     * @tags integration, cpi
     * @name FilterCourses
     * @summary Integration and company specific course data
     * @request GET:/delegate/integration/{typ}/course/search
     * @secure
     * @response `200` `CoursePackDTO` Course Pack
     */
    filterCourses: (
      typ: string,
      query?: {
        /** filter results title and description */
        filter?: string;
        /** sort ascending flag */
        sortAscDirection?: string;
        /** filter results by visiblity flag */
        visible?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CoursePackDTO, any>({
        path: `/delegate/integration/${typ}/course/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain available Liferay user defined Categories
     *
     * @tags integration, cpi
     * @name LiferayUserDefinedCategoriesListing
     * @summary Liferay user defined Categories listing
     * @request GET:/delegate/integration/{typ}/categories
     * @secure
     * @response `200` `Map` Category Map
     */
    liferayUserDefinedCategoriesListing: (typ: string, params: RequestParams = {}) =>
      this.request<Map, any>({
        path: `/delegate/integration/${typ}/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain classifiers usable in given integration type
     *
     * @tags integration, cpi
     * @name IntegrationSpecificClassifiersListing
     * @summary Integration specific Classifiers listing
     * @request GET:/delegate/integration/{typ}/classifiers
     * @secure
     * @response `200` `(ClassifierDTO)[]` Classifiers
     */
    integrationSpecificClassifiersListing: (typ: string, params: RequestParams = {}) =>
      this.request<ClassifierDTO[], any>({
        path: `/delegate/integration/${typ}/classifiers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain one course for given integration type and company by URN. Internal use only
     *
     * @tags integration, cpi
     * @name GetCourseById
     * @summary Integration and company specific course data
     * @request GET:/delegate/integration/{typ}/course/id/{id}
     * @secure
     * @response `200` `CourseDTO` Course
     */
    getCourseById: (typ: string, id: string, params: RequestParams = {}) =>
      this.request<CourseDTO, any>({
        path: `/delegate/integration/${typ}/course/id/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain list of Integration types
     *
     * @tags integration, cpi
     * @name IntegrationTypesPublic
     * @summary Integration types public
     * @request GET:/delegate/integration/list/company/{companyId}
     * @secure
     * @response `200` `IntegrationTypes` IntegrationTypes
     */
    integrationTypesPublic: (
      companyId: string,
      query?: {
        /** integration enabled flag */
        enabled?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<IntegrationTypes, any>({
        path: `/delegate/integration/list/company/${companyId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Obtain one course for given integration type and company by URN. Internal use only
     *
     * @tags integration, cpi
     * @name GetCourseByUrnAndCompany
     * @summary Integration and company specific course data
     * @request GET:/delegate/integration/{typ}/company/{company}/course/{urn}
     * @secure
     * @response `200` `CourseDTO` Course
     */
    getCourseByUrnAndCompany: (typ: string, company: string, urn: string, params: RequestParams = {}) =>
      this.request<CourseDTO, any>({
        path: `/delegate/integration/${typ}/company/${company}/course/${urn}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Check if given integration type is enabled in the system
     *
     * @tags integration, cpi
     * @name IntegrationTypeAvailability
     * @summary Integration type availability
     * @request GET:/delegate/integration/{typ}/status
     * @secure
     * @response `200` `StatusResponseDTO` whether integration of this type is enabled
     */
    integrationTypeAvailability: (typ: string, company: string, params: RequestParams = {}) =>
      this.request<StatusResponseDTO, any>({
        path: `/delegate/integration/${typ}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide list of course instructors
     *
     * @tags courses, course
     * @name GetListOfCourseInstructors
     * @summary Get list of course instructors
     * @request GET:/delegate/courses/{id}/instructors
     * @secure
     * @response `200` `(CoursesUserResponse)[]` list of instructors
     */
    getListOfCourseInstructors: (id: number, params: RequestParams = {}) =>
      this.request<CoursesUserResponse[], any>({
        path: `/delegate/courses/${id}/instructors`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description enroll into the course
     *
     * @tags courses, course
     * @name EnrollIntoTheCourse
     * @summary Enroll into the course
     * @request POST:/delegate/courses/join
     * @secure
     * @response `204` `void` enrolled into the course
     * @response `404` `void` course not found
     */
    enrollIntoTheCourse: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/courses/join`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description rate the course
     *
     * @tags courses, course
     * @name RateTheCourse
     * @summary Rate the course
     * @request POST:/delegate/courses/rate
     * @secure
     * @response `204` `void` course is rated
     */
    rateTheCourse: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/rate`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Reset own rate of the the course
     *
     * @tags courses, course
     * @name ResetOwnRateOfTheTheCourse
     * @summary Reset own rate of the the course
     * @request POST:/delegate/courses/unrate
     * @secure
     * @response `204` `void` course is rated
     */
    resetOwnRateOfTheTheCourse: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/unrate`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description provide available themes
     *
     * @tags courses, course
     * @name GetAvailableThemes
     * @summary Get available themes
     * @request GET:/delegate/courses/themes
     * @secure
     * @response `200` `(CourseTheme)[]` list of themes
     */
    getAvailableThemes: (params: RequestParams = {}) =>
      this.request<CourseTheme[], any>({
        path: `/delegate/courses/themes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description leave the course
     *
     * @tags courses, course
     * @name LeaveTheCourse
     * @summary Leave the course
     * @request POST:/delegate/courses/leave
     * @secure
     * @response `204` `void` left the course
     */
    leaveTheCourse: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/leave`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description set course theme
     *
     * @tags courses, course
     * @name SetCourseTheme
     * @summary set course theme
     * @request POST:/delegate/courses/{id}/theme
     * @secure
     * @response `204` `void` theme is set
     */
    setCourseTheme: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${id}/theme`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description assign site roles to members
     *
     * @tags courses, course
     * @name AssignSiteRolesToMembers
     * @summary Assign site roles to members
     * @request POST:/delegate/courses/siteroles
     * @secure
     * @response `204` `void` site roles are assigned
     */
    assignSiteRolesToMembers: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/siteroles`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description get list of possible site roles
     *
     * @tags courses, course
     * @name GetSiteRoles
     * @summary get site roles
     * @request GET:/delegate/courses/siteroles
     * @secure
     * @response `200` `(RoleInfo)[]` list of possible site roles
     */
    getSiteRoles: (params: RequestParams = {}) =>
      this.request<RoleInfo[], any>({
        path: `/delegate/courses/siteroles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description add course members of a given type
     *
     * @tags courses, course
     * @name AddCourseMembers
     * @summary add course members
     * @request POST:/delegate/courses/{id}/member
     * @secure
     * @response `204` `void` members are added
     */
    addCourseMembers: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${id}/member`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
 * @description get members of the given course
 *
 * @tags courses, course
 * @name GetCourseMembers
 * @summary get course members
 * @request GET:/delegate/courses/{id}/member
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (UserGroupInfo)[],

}` range of course members
 */
    getCourseMembers: (
      id: number,
      query: {
        /** need to be set to "MEMBERS" */
        action: string;
        /** type of members to retrieve; one of ["role", "user", "userGroup", "organization", "audience"] */
        memberType: string;
        /** text to filter member names by */
        filter: string;
        /** should result items be sorted in ascending order */
        sortAscDirection: boolean;
        /**
         * what page of results to fetch; defaults to 1
         * @format int32
         */
        page?: number;
        /**
         * page size (how many entries to take from the result to form one page); "page" parameter is omitted if "count" is empty
         * @format int32
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: UserGroupInfo[];
        },
        any
      >({
        path: `/delegate/courses/${id}/member`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description publish course
     *
     * @tags courses, course
     * @name PublishCourse
     * @summary Publish course
     * @request POST:/delegate/courses/publish
     * @secure
     * @response `204` `void` course is published
     * @response `404` `void` course not found
     * @response `409` `void` course is already published or has illegal course type
     */
    publishCourse: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/courses/publish`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description provide list of categories
     *
     * @tags courses, course
     * @name GetListOfCategories
     * @summary Get list of categories
     * @request GET:/delegate/courses/categories
     * @secure
     * @response `200` `(ValamisTag)[]` list of categories
     */
    getListOfCategories: (params: RequestParams = {}) =>
      this.request<ValamisTag[], any>({
        path: `/delegate/courses/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description delete members with given ids from the course
     *
     * @tags courses, course
     * @name DeleteCourseMembers
     * @summary Delete course members
     * @request DELETE:/delegate/courses/{id}/members
     * @secure
     * @response `204` `void` members are deleted
     */
    deleteCourseMembers: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${id}/members`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description get list of users who can be set as course instructors
 *
 * @tags courses, course
 * @name GetListOfPossibleInstructorsForTheCourse
 * @summary Get list of possible instructors for the course
 * @request GET:/delegate/courses/possible-instructors/courseId/{courseId}
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (CoursesUserResponse)[],

}` range of possible instructors
 */
    getListOfPossibleInstructorsForTheCourse: (courseId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: CoursesUserResponse[];
        },
        any
      >({
        path: `/delegate/courses/possible-instructors/courseId/${courseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description provide range of course summaries for courses
 *
 * @tags courses, course-info
 * @name GetListOfCourseSummaries
 * @summary get list of course summaries
 * @request GET:/delegate/courses/
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (CourseInfoResponse)[],

}` range of course summaries
 */
    getListOfCourseSummaries: (
      query?: {
        /** type of the user; one of ["admin", "user"] */
        courseUserType?: string;
        /** text to filter course by; will filter all course titles containing **filterText** */
        filterText?: string;
        /** text to perform title full text search by; which basically mean that **filter** will be split into distinct terms and titles containing at least one of them will be searched for prioritizing those with maximum hits */
        filter?: string;
        /** the same as **filter** */
        searchText?: string;
        /** status of the course; one of ["draft", "public"] */
        status?: string;
        /** course activeness status; one of ["all", "active", "inactive"] */
        active?: string;
        /**
         * how many entries to skip from the result; defaults to 0
         * @format int32
         */
        skip?: number;
        /**
         * how many entries to take from the result; defaults to 20; can't be more than 500
         * @format int32
         */
        take?: number;
        /** template sorting type; one of ["title", "-title"]; defaults to "title" */
        sort?: string;
        /** type of the courses to include in the result; one of ["courses", "noncourses", "all"]; defaults to "courses" */
        courseTypeFilter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: CourseInfoResponse[];
        },
        any
      >({
        path: `/delegate/courses/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create course
     *
     * @tags courses, course
     * @name CreateCourse
     * @summary create course
     * @request POST:/delegate/courses/
     * @secure
     * @response `200` `CourseResponse` details of the created course
     */
    createCourse: (params: RequestParams = {}) =>
      this.request<CourseResponse, any>({
        path: `/delegate/courses/`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide summary for the course identified by **id**
     *
     * @tags courses, course-info
     * @name GetCourseSummary
     * @summary get course summary
     * @request GET:/delegate/courses/{id}
     * @secure
     * @response `200` `CourseInfoResponse` course summary
     */
    getCourseSummary: (id: number, params: RequestParams = {}) =>
      this.request<CourseInfoResponse, any>({
        path: `/delegate/courses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description delete course by id
     *
     * @tags courses, course
     * @name DeleteCourse
     * @summary Delete course
     * @request DELETE:/delegate/courses/{id}
     * @secure
     * @response `204` `void` course is deleted
     */
    deleteCourse: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description update course
     *
     * @tags courses, course
     * @name UpdateCourse
     * @summary update course
     * @request PUT:/delegate/courses/{id}
     * @secure
     * @response `200` `CourseResponse` details of the updated course
     */
    updateCourse: (id: number, params: RequestParams = {}) =>
      this.request<CourseResponse, any>({
        path: `/delegate/courses/${id}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove users from waiting list
     *
     * @tags courses, course
     * @name DeleteUsersFromWaitingList
     * @summary Delete users from waiting list
     * @request DELETE:/delegate/courses/{id}/queue
     * @secure
     * @response `204` `void` users removed
     */
    deleteUsersFromWaitingList: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${id}/queue`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description provide enqueued (waiting for membership when the course is full) users for the given course
 *
 * @tags courses, course
 * @name GetEnqueuedUsers
 * @summary Get enqueued users
 * @request GET:/delegate/courses/{id}/queue
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (CoursesUserResponse)[],

}` range of users in the queue
 */
    getEnqueuedUsers: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: CoursesUserResponse[];
        },
        any
      >({
        path: `/delegate/courses/${id}/queue`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description assign organization roles to members
     *
     * @tags courses, course
     * @name AssignOrganizationRolesToMembers
     * @summary Assign organization roles to members
     * @request POST:/delegate/courses/orgroles
     * @secure
     * @response `204` `void` organization roles are assigned
     */
    assignOrganizationRolesToMembers: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/orgroles`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description get list of possible organization roles
     *
     * @tags courses, course
     * @name GetOrganizationRoles
     * @summary get organization roles
     * @request GET:/delegate/courses/orgroles
     * @secure
     * @response `200` `(RoleInfo)[]` list of possible organization roles
     */
    getOrganizationRoles: (params: RequestParams = {}) =>
      this.request<RoleInfo[], any>({
        path: `/delegate/courses/orgroles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide list of course descendant ids
     *
     * @tags courses, course
     * @name GetListOfCourseDescendants
     * @summary Get list of course descendants
     * @request GET:/delegate/courses/{id}/descendants
     * @secure
     * @response `200` `(number)[]` list of course descendant ids
     */
    getListOfCourseDescendants: (id: string, params: RequestParams = {}) =>
      this.request<number[], any>({
        path: `/delegate/courses/${id}/descendants`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide available templates
     *
     * @tags courses, course
     * @name GetAvailableTemplates
     * @summary Get available templates
     * @request GET:/delegate/courses/templates
     * @secure
     * @response `200` `(CourseTemplate)[]` list of templates
     */
    getAvailableTemplates: (params: RequestParams = {}) =>
      this.request<CourseTemplate[], any>({
        path: `/delegate/courses/templates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description get pending membership requests
 *
 * @tags courses, course
 * @name GetCoursePendingMembershipRequests
 * @summary get course pending membership requests
 * @request GET:/delegate/courses/requests
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (CoursesUserResponse)[],

}` range of users waiting for approval
 */
    getCoursePendingMembershipRequests: (
      query: {
        /**
         * id of the course to get pending requests for
         * @format int64
         */
        id: number;
        /** should result items be sorted in ascending order */
        sortAscDirection: boolean;
        /**
         * what page of results to fetch; defaults to 1
         * @format int32
         */
        page?: number;
        /**
         * page size (how many entries to take from the result to form one page); "page" parameter is omitted if "count" is empty
         * @format int32
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: CoursesUserResponse[];
        },
        any
      >({
        path: `/delegate/courses/requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of users who can be set as instructors
     *
     * @tags courses, course
     * @name GetListOfPossibleInstructors
     * @summary Get list of possible instructors
     * @request GET:/delegate/courses/possible-instructors
     * @secure
     * @response `200` `(CoursesUserResponse)[]` list of possible instructors
     */
    getListOfPossibleInstructors: (params: RequestParams = {}) =>
      this.request<CoursesUserResponse[], any>({
        path: `/delegate/courses/possible-instructors`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description provide range of details for courses which meet the requirements
 *
 * @tags courses, course
 * @name GetCoursesDetails
 * @summary Get courses details
 * @request GET:/delegate/courses/list/{option}
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (CourseResponse)[],

}` range of courses details
 */
    getCoursesDetails: (
      option: string,
      query?: {
        /**
         * what page of results to fetch; defaults to 1
         * @format int32
         */
        page?: number;
        /**
         * page size (how many entries to take from the result to form one page); "page" parameter is omitted if "count" is empty
         * @format int32
         */
        count?: number;
        /** should the result be sorted in ascending direction */
        sortAscDirection?: boolean;
        /** text to filter course titles by */
        filter?: string;
        /** include guest sites into the returned result */
        withGuestSite?: boolean;
        /** include in the result only those courses for which the user has "view" and "update" permissions (otherwise all courses for which the user has "view" permission will be included) */
        showOnlyEditable?: boolean;
        /** include in the result only descendants of the course with **courseId** (in case this option is set **courseId** is mandatory parameter) */
        isOnlyChildCourses?: boolean;
        /**
         * id of the parent course (is required if **isOnlyChildCourses** is set to true)
         * @format int64
         */
        courseId?: number;
        /**
         * include in the result organization sites
         * @default "false"
         */
        showOrganizationsSites?: boolean;
        /** set of ids to filter courses by 'layoutSetPrototypeId' */
        templateIdsInput?: number[];
        /** set of site ids to filter courses by */
        siteIdsInput?: number[];
        /** set of category ids to filter courses by */
        categoryIds?: number[];
        /** type of the courses to include in the result; one of ["courses", "noncourses", "all"] */
        courseTypeFilter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: CourseResponse[];
        },
        any
      >({
        path: `/delegate/courses/list/${option}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description accept or reject membership request from the user with **userId**
     *
     * @tags courses, course
     * @name HandleMembershipRequest
     * @summary Handle membership request
     * @request POST:/delegate/courses/requests/handle/{action}
     * @secure
     * @response `204` `void` request is handled
     */
    handleMembershipRequest: (action: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/requests/handle/${action}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description add membership request
     *
     * @tags courses, course
     * @name AddMembershipRequest
     * @summary Add membership request
     * @request POST:/delegate/courses/requests/add
     * @secure
     * @response `204` `void` request is added
     * @response `404` `void` course not found
     */
    addMembershipRequest: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/courses/requests/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description remove credit value of the course.
     *
     * @tags courses, course-credit
     * @name DeleteCourseCreditInformation
     * @summary Delete course credit information
     * @request DELETE:/delegate/courses/{courseId}/credit
     * @secure
     * @response `204` `void` course credit information is removed
     */
    deleteCourseCreditInformation: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/credit`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description return credit value of the course.
     *
     * @tags courses, course-credit
     * @name ProvideCourseCreditInformation
     * @summary Provide course credit information
     * @request GET:/delegate/courses/{courseId}/credit
     * @secure
     * @response `200` `CourseCreditResponse` credit value of the course
     * @response `404` `void` no credit value set
     */
    provideCourseCreditInformation: (courseId: number, params: RequestParams = {}) =>
      this.request<CourseCreditResponse, void>({
        path: `/delegate/courses/${courseId}/credit`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description set credit value for given course.
     *
     * @tags courses, course-credit
     * @name SetCourseCredit
     * @summary Set course credit
     * @request PUT:/delegate/courses/{courseId}/credit
     * @secure
     * @response `204` `void` credit value is set
     */
    setCourseCredit: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/credit`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description provide bound user group name if the course have enabled option for user group auto creation.
     *
     * @tags courses, course-user-group
     * @name GetCourseBoundUserGroupInfo
     * @summary Get course bound user group info
     * @request GET:/delegate/courses/{courseId}/user-group
     * @secure
     * @response `200` `CourseUserGroupResponse` course user group
     * @response `404` `void` the course have disabled option for user group creation
     */
    getCourseBoundUserGroupInfo: (courseId: number, params: RequestParams = {}) =>
      this.request<CourseUserGroupResponse, void>({
        path: `/delegate/courses/${courseId}/user-group`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description enables user group auto creation option for the course and creates such user group.
     *
     * @tags courses, course-user-group
     * @name SetCourseUserGroup
     * @summary Set course user group
     * @request PUT:/delegate/courses/{courseId}/user-group
     * @secure
     * @response `204` `void` course user group is created
     * @response `404` `void` course not found
     * @response `409` `void` bound user group creation impossible due to already existed user group with automatically generated name
     */
    setCourseUserGroup: (courseId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/courses/${courseId}/user-group`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description remove all keywords of the course.
     *
     * @tags courses, course-keyword
     * @name DeleteCourseKeywords
     * @summary Delete course keywords
     * @request DELETE:/delegate/courses/{courseId}/keywords
     * @secure
     * @response `204` `void` course keywords are removed
     */
    deleteCourseKeywords: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/keywords`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description set the list of course keywords.
     *
     * @tags courses, course-keyword
     * @name SetCourseKeywords
     * @summary Set course keywords
     * @request PUT:/delegate/courses/{courseId}/keywords
     * @secure
     * @response `204` `void` keywords are set
     */
    setCourseKeywords: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/keywords`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description provide keywords list.
     *
     * @tags courses, course-keyword
     * @name ProvideTheListOfCourseKeywords
     * @summary Provide the list of course keywords
     * @request GET:/delegate/courses/{courseId}/keywords
     * @secure
     * @response `200` `(CourseKeyword)[]` list of course keywords
     */
    provideTheListOfCourseKeywords: (courseId: number, params: RequestParams = {}) =>
      this.request<CourseKeyword[], any>({
        path: `/delegate/courses/${courseId}/keywords`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description retrieve course permissions which contain view, update, delete, permissions, view members, assign members, assign user roles, add community and grade permissions
     *
     * @tags courses, course-permissions
     * @name GetCoursePermissions
     * @summary Get course permissions
     * @request GET:/delegate/courses/{courseId}/permissions
     * @secure
     * @response `200` `CoursePermissionsModel` object containing permission names as keys and booleans indicating whether the permission is set as values
     */
    getCoursePermissions: (courseId: number, params: RequestParams = {}) =>
      this.request<CoursePermissionsModel, any>({
        path: `/delegate/courses/${courseId}/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description delete grading scale of the course
     *
     * @tags courses, courses-grading-scale
     * @name DeleteCourseGradingScale
     * @summary Delete course grading scale
     * @request DELETE:/delegate/courses/{courseId}/grading-scale
     * @secure
     * @response `204` `void` grading scale is deleted
     */
    deleteCourseGradingScale: (courseId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/grading-scale`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description provide grading scale of the course
     *
     * @tags courses, course-grading-scale
     * @name GetCourseGradingScale
     * @summary Get course grading scale
     * @request GET:/delegate/courses/{courseId}/grading-scale
     * @secure
     * @response `200` `number` grading scale
     */
    getCourseGradingScale: (courseId: number, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/delegate/courses/${courseId}/grading-scale`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description create a grading scale for the course
     *
     * @tags courses, course-grading-scale
     * @name CreateCourseGradingScale
     * @summary Create course grading scale
     * @request POST:/delegate/courses/{courseId}/grading-scale
     * @secure
     * @response `204` `void` grading scale is created
     */
    createCourseGradingScale: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/grading-scale`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description set learning path prerequisites for the course identified by **id**
     *
     * @tags courses, course-prerequisites
     * @name DeleteLearningPathsPrerequisitesForTheCourse
     * @summary Delete learning paths prerequisites for the course
     * @request DELETE:/delegate/courses/{id}/required-learning-paths
     * @secure
     * @response `204` `void` prerequisites are set
     */
    deleteLearningPathsPrerequisitesForTheCourse: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${id}/required-learning-paths`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description set learning path prerequisites for the course identified by **id**
     *
     * @tags courses, course-prerequisites
     * @name SetLearningPathsPrerequisitesForTheCourse
     * @summary Set learning paths prerequisites for the course
     * @request PUT:/delegate/courses/{id}/required-learning-paths
     * @secure
     * @response `204` `void` prerequisites are set
     */
    setLearningPathsPrerequisitesForTheCourse: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${id}/required-learning-paths`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description provide the list of learning paths being prerequisites for the course
     *
     * @tags courses, course-prerequisites
     * @name GetRequiredLearningPaths
     * @summary Get required learning paths
     * @request GET:/delegate/courses/{id}/required-learning-paths
     * @secure
     * @response `200` `(LearningPathPrerequisiteResponse)[]` list of prerequisite learning paths
     */
    getRequiredLearningPaths: (id: number, params: RequestParams = {}) =>
      this.request<LearningPathPrerequisiteResponse[], any>({
        path: `/delegate/courses/${id}/required-learning-paths`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide the list of learning paths being course prerequisites for the user with **userId**
     *
     * @tags courses, course-prerequisites
     * @name GetUserLearningPathPrerequisitesForTheCourse
     * @summary Get user learning path prerequisites for the course
     * @request GET:/delegate/courses/{id}/users/{userId}/required-learning-paths
     * @secure
     * @response `200` `(UserLPComplianceResponse)[]` list of user course prerequisites
     */
    getUserLearningPathPrerequisitesForTheCourse: (id: number, userId: number, params: RequestParams = {}) =>
      this.request<UserLPComplianceResponse[], any>({
        path: `/delegate/courses/${id}/users/${userId}/required-learning-paths`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description set grade for the given course and user
     *
     * @tags courses, course-grade
     * @name SetCourseGrade
     * @summary Set course grade.
     * @request PUT:/delegate/course-grades/
     * @secure
     * @response `204` `void` grade is set
     */
    setCourseGrade: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/course-grades/`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description get grade for the given course and user
     *
     * @tags courses, course-grade
     * @name GetCourseGrade
     * @summary Get course grade.
     * @request GET:/delegate/course-grades/{courseId}/users/{userId}
     * @secure
     * @response `200` `CourseGrade` grade for the course
     */
    getCourseGrade: (courseId: number, userId: number, params: RequestParams = {}) =>
      this.request<CourseGrade, any>({
        path: `/delegate/course-grades/${courseId}/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description delete all categories from the course
     *
     * @tags courses, course-categories
     * @name DeleteCourseCategories
     * @summary Delete course categories
     * @request DELETE:/delegate/courses/{courseId}/lr-categories
     * @secure
     * @response `204` `void` categories are deleted
     */
    deleteCourseCategories: (courseId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/lr-categories`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description provide list of categories for a course with **courseId**
     *
     * @tags courses, course-category
     * @name GetCategories
     * @summary Get categories
     * @request GET:/delegate/courses/{courseId}/lr-categories
     * @secure
     * @response `200` `(CategoryResponse)[]` list of course categories
     */
    getCategories: (
      courseId: number,
      query: {
        /**
         * id of vocabulary to filter categories by
         * @format int64
         */
        vocabularyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryResponse[], any>({
        path: `/delegate/courses/${courseId}/lr-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description set list of categories for the course with given **courseId**.
     *
     * @tags courses, course-category
     * @name SetCourseCategories
     * @summary Set course categories
     * @request PUT:/delegate/courses/{courseId}/lr-categories
     * @secure
     * @response `204` `void` categories are set
     */
    setCourseCategories: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/lr-categories`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description add course category
     *
     * @tags courses, course-category
     * @name AddCourseCategory
     * @summary Add course category
     * @request POST:/delegate/courses/{courseId}/lr-categories
     * @secure
     * @response `201` `void` category is created
     */
    addCourseCategory: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/lr-categories`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description delete category from the course
     *
     * @tags courses, course-category
     * @name DeleteCategory
     * @summary Delete category
     * @request DELETE:/delegate/courses/{courseId}/lr-categories/{categoryId}
     * @secure
     * @response `204` `void` category is deleted
     */
    deleteCategory: (courseId: number, categoryId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/lr-categories/${categoryId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description provides course related e-commerce info
     *
     * @tags courses, courses-e-commerce
     * @name ProvideCourseECommerceInfo
     * @summary provide course e-commerce info
     * @request GET:/delegate/courses/{id}/ecommerce-info
     * @secure
     * @response `200` `EcommerceResponse` e-commerce info
     */
    provideCourseECommerceInfo: (id: number, params: RequestParams = {}) =>
      this.request<EcommerceResponse, any>({
        path: `/delegate/courses/${id}/ecommerce-info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Provide course participant (user) count, number of pending membership requests, queue capacity (user limit) and current queue size
     *
     * @tags courses, course-participation
     * @name GetCourseParticipationInfo
     * @summary Get course participation info
     * @request GET:/delegate/courses/{courseId}/participation-info
     * @secure
     * @response `200` `ParticipationInfo` summary of course participation
     */
    getCourseParticipationInfo: (courseId: number, params: RequestParams = {}) =>
      this.request<ParticipationInfo, any>({
        path: `/delegate/courses/${courseId}/participation-info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide user participation information for a given course; it includes whether a user is a course member, is a user waiting to become a course member, whether a user membership request is accepted.
     *
     * @tags courses, course-participation
     * @name GetCourseParticipationInformationForAUser
     * @summary Get course participation information for a user
     * @request GET:/delegate/courses/{courseId}/participation-info/{userId}
     * @secure
     * @response `200` `UserParticipationInfo` user participation information
     */
    getCourseParticipationInformationForAUser: (courseId: number, userId: number, params: RequestParams = {}) =>
      this.request<UserParticipationInfo, any>({
        path: `/delegate/courses/${courseId}/participation-info/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description return course summary, public and private descriptions for given course. If user is GUEST then private description will be hidden.
     *
     * @tags courses, course-description
     * @name ProvideCourseSummaryPublicAndPrivateDescriptions
     * @summary Provide course summary, public and private descriptions
     * @request GET:/delegate/courses/{courseId}/description
     * @secure
     * @response `200` `CourseDescription` course summary
     */
    provideCourseSummaryPublicAndPrivateDescriptions: (courseId: number, params: RequestParams = {}) =>
      this.request<CourseDescription, any>({
        path: `/delegate/courses/${courseId}/description`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description provide range of user course reports
 *
 * @tags courses, course-statistics
 * @name GetCourseStatistics
 * @summary Get course statistics
 * @request GET:/delegate/courses/course-statistics/
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    records: (CourseUsersStatisticResponse)[],

}` range of user course reports
 */
    getCourseStatistics: (
      query: {
        /**
         * id of the user
         * @format int64
         */
        userId: number;
        /**
         * number of page to show
         * @format int32
         * @default "0"
         */
        page?: number;
        /**
         * number of items in the page
         * @format int32
         * @default "20"
         */
        count?: number;
        /** should results be sorted in ascending direction */
        sortAscDirection?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          records: CourseUsersStatisticResponse[];
        },
        any
      >({
        path: `/delegate/courses/course-statistics/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide set of completion criteria parameters of the course.
     *
     * @tags courses, completion-criteria
     * @name ProvideCourseCompletionCriteriaInformation
     * @summary Provide course completion criteria information
     * @request GET:/delegate/courses/{courseId}/completion-criteria
     * @secure
     * @response `200` `CompletionCriteria` set of completion criteria parameters of the course
     */
    provideCourseCompletionCriteriaInformation: (courseId: number, params: RequestParams = {}) =>
      this.request<CompletionCriteria, any>({
        path: `/delegate/courses/${courseId}/completion-criteria`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description set completion criteria options for the course. At least one criteria parameter must be true. In other case 400 code is returned. Returns 404 if no course found.
     *
     * @tags courses, completion-criteria
     * @name SetCourseCompletionCriteria
     * @summary Set course completion criteria
     * @request PUT:/delegate/courses/{courseId}/completion-criteria
     * @secure
     * @response `204` `void` criteria are set
     */
    setCourseCompletionCriteria: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/completion-criteria`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description removes course logo
     *
     * @tags courses, course-logo
     * @name DeleteCourseLogo
     * @summary Delete course logo
     * @request DELETE:/delegate/courses/{courseId}/logo
     * @secure
     * @response `204` `void` logo is removed
     */
    deleteCourseLogo: (courseId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/logo`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description provides capability to set course logo either by uploading image or by providing file entry id and version
     *
     * @tags courses, course-logo
     * @name SetCourseLogo
     * @summary Set course logo
     * @request PUT:/delegate/courses/{courseId}/logo
     * @secure
     * @response `204` `void` log is set
     */
    setCourseLogo: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/logo`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description redirects to the course logo
     *
     * @tags courses, course-logo
     * @name GetCourseLogo
     * @summary Get course logo
     * @request GET:/delegate/courses/{courseId}/logo
     * @secure
     * @response `302` `void` redirects to the course logo
     * @response `404` `void` "No logo found for course with ID $courseId" if logo for the course is not found
     */
    getCourseLogo: (courseId: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/delegate/courses/${courseId}/logo`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description deletes PD hours for a given course
     *
     * @tags courses, course-pd-hours
     * @name DeleteCoursePdHours
     * @summary Delete course PD hours
     * @request DELETE:/delegate/courses/{courseId}/pd-hours
     * @secure
     * @response `204` `void` pd hours are removed
     */
    deleteCoursePdHours: (courseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/pd-hours`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description provide total and specific PD hours for a given course
     *
     * @tags courses, course-pd-hours
     * @name GetPdHours
     * @summary Get PD hours
     * @request GET:/delegate/courses/{courseId}/pd-hours
     * @secure
     * @response `200` `CoursePDHoursResponse` course PD hours
     */
    getPdHours: (courseId: number, params: RequestParams = {}) =>
      this.request<CoursePDHoursResponse, any>({
        path: `/delegate/courses/${courseId}/pd-hours`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description set total and specific pd hours for a given course
     *
     * @tags courses, course-pd-hours
     * @name SetCoursePdHours
     * @summary Set course PD hours
     * @request PUT:/delegate/courses/{courseId}/pd-hours
     * @secure
     * @response `204` `void` pd hours are set
     */
    setCoursePdHours: (courseId: number, total: string, specific: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delegate/courses/${courseId}/pd-hours`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description retrieve manual membership capability status
     *
     * @tags courses, course-manual-membership
     * @name GetCourseManualMembership
     * @summary Get course manual membership
     * @request GET:/delegate/courses/{courseId}/manual-membership
     * @secure
     * @response `200` `boolean` manual membership capability status (turned on or off)
     * @response `404` `void` if course is not found
     */
    getCourseManualMembership: (courseId: string, params: RequestParams = {}) =>
      this.request<boolean, void>({
        path: `/delegate/courses/${courseId}/manual-membership`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description enable or disable manual membership management capability for the course
     *
     * @tags courses, course-manual-membership
     * @name SetCourseManualMembership
     * @summary Set course manual membership
     * @request PUT:/delegate/courses/{courseId}/manual-membership
     * @secure
     * @response `204` `void` manual membership is set
     * @response `400` `void` in case "enabled" flag could not be extracted
     * @response `404` `void` "Course not found" if course with "courseId" was not found
     */
    setCourseManualMembership: (courseId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/delegate/courses/${courseId}/manual-membership`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description get webinar information for the training event identified by ID
     *
     * @tags training-events, training-event
     * @name GetTrainingEventWebinarInformation
     * @summary Get training event webinar information
     * @request GET:/delegate/training-events/{id}/webinar-info
     * @secure
     * @response `200` `WebinarInfoResponse` training event webinar information
     */
    getTrainingEventWebinarInformation: (id: number, params: RequestParams = {}) =>
      this.request<WebinarInfoResponse, any>({
        path: `/delegate/training-events/${id}/webinar-info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get information for the training event identified by ID
     *
     * @tags training-events, training-event
     * @name GetTrainingEventInformation
     * @summary Get training event information
     * @request GET:/delegate/training-events/{id}
     * @secure
     * @response `200` `TrainingEventWithInfo` training event information
     */
    getTrainingEventInformation: (id: number, params: RequestParams = {}) =>
      this.request<TrainingEventWithInfo, any>({
        path: `/delegate/training-events/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get range of short training events summaries conforming restrictions passed in params
     *
     * @tags training-events, training-event
     * @name GetShortSummariesOfTrainingEvents
     * @summary Get short summaries of training events
     * @request GET:/delegate/training-events
     * @secure
     * @response `200` `Any` range of training events summaries
     */
    getShortSummariesOfTrainingEvents: (
      query?: {
        /**
         * text to filter title of training events by
         * @default """"
         */
        filter?: string;
        /**
         * id of calendar to filter training events by
         * @format int64
         */
        calendarId?: number;
        /**
         * id of the cousre to filter training events by
         * @format int64
         */
        courseId?: number;
        /**
         * filter training events with start time after **startTime** timestamp
         * @format int64
         */
        startTime?: number;
        /**
         * filter training events with start time is before **endTime** timestamp
         * @format int64
         */
        endTime?: number;
        /** type of training event to filter result by; one of ["Webinar", "ClassRoom"] */
        eventType?: string;
        /**
         * should only training events without sessions be shown
         * @default "false"
         */
        withoutSessions?: boolean;
        /**
         * field by which resulting training events should sorted; one of ["name", "starttime"]
         * @default ""starttime""
         */
        sortBy?: string;
        /**
         * should result be sorted in ascending order
         * @default "true"
         */
        sortAscDirection?: boolean;
        /**
         * index of page to show
         * @format int32
         */
        page?: number;
        /**
         * number of items in the page
         * @format int32
         */
        count?: number;
        /** filter events by hasLearningPoints; defaults to an empty value (no filter) */
        hasLearningPoints?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/training-events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description search trainers by training events filter; despite the type endpoint method being GET one should use POST method with 'X-HTTP-Method-Override' header set to 'GET'
     *
     * @tags training-events, training-event-search
     * @name GetTrainersByTrainingEventsFilter
     * @summary Get trainers by training events filter
     * @request GET:/delegate/training-events/filters/event-trainers
     * @secure
     * @response `200` `(TrainingEventsUserResponse)[]` list of trainers; empty list if requesting user is not responsible for any other users
     * @response `400` `void` BadRequest if createdByMe and creatorUserId used together
     */
    getTrainersByTrainingEventsFilter: (params: RequestParams = {}) =>
      this.request<TrainingEventsUserResponse[], void>({
        path: `/delegate/training-events/filters/event-trainers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description search training events with additional info applying constraints defined by the filter to the result; despite the type endpoint method being GET one should use POST method with 'X-HTTP-Method-Override' header set to 'GET'
     *
     * @tags training-events, training-event-search
     * @name SearchTrainingEvents
     * @summary Search training events
     * @request GET:/delegate/training-events/search
     * @secure
     * @response `200` `(TrainingEventWithInfo)[]` list of training events
     * @response `400` `void` BadRequest if createdByMe and creatorUserId used together
     */
    searchTrainingEvents: (params: RequestParams = {}) =>
      this.request<TrainingEventWithInfo[], void>({
        path: `/delegate/training-events/search`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide a list of unique categories from training events filtered by parameter values; despite the type endpoint method being GET one should use POST method with 'X-HTTP-Method-Override' header set to 'GET'
     *
     * @tags training-events, training-event-search
     * @name GetCategoriesByTrainingEventsFilter
     * @summary Get categories by training events filter
     * @request GET:/delegate/training-events/filters/categories
     * @secure
     * @response `200` `(Category)[]` list of categories
     * @response `400` `void` BadRequest if createdByMe and creatorUserId used together
     */
    getCategoriesByTrainingEventsFilter: (params: RequestParams = {}) =>
      this.request<Category[], void>({
        path: `/delegate/training-events/filters/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description search countries by training events filter; despite the type endpoint method being GET one should use POST method with 'X-HTTP-Method-Override' header set to 'GET'
     *
     * @tags training-events, training-event-search
     * @name GetCountriesByTrainingEventsFilter
     * @summary Get countries by training events filter
     * @request GET:/delegate/training-events/filters/countries
     * @secure
     * @response `200` `(string)[]` list of countries
     * @response `400` `void` BadRequest if createdByMe and creatorUserId used together
     */
    getCountriesByTrainingEventsFilter: (params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/delegate/training-events/filters/countries`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description search languages by training events filter; despite the type endpoint method being GET one should use POST method with 'X-HTTP-Method-Override' header set to 'GET'
     *
     * @tags training-events, training-event-search
     * @name GetLanguagesByTrainingEventsFilter
     * @summary Get languages by training events filter
     * @request GET:/delegate/training-events/filters/languages
     * @secure
     * @response `200` `(string)[]` list of languages
     * @response `400` `void` BadRequest if createdByMe and creatorUserId used together
     */
    getLanguagesByTrainingEventsFilter: (params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/delegate/training-events/filters/languages`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description search cities by training events filter; despite the type endpoint method being GET one should use POST method with 'X-HTTP-Method-Override' header set to 'GET'
     *
     * @tags training-events, training-event-search
     * @name GetCitiesByTrainingEventsFilter
     * @summary Get cities by training events filter
     * @request GET:/delegate/training-events/filters/cities
     * @secure
     * @response `200` `(string)[]` list of cities
     * @response `400` `void` BadRequest if createdByMe and creatorUserId used together
     */
    getCitiesByTrainingEventsFilter: (params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/delegate/training-events/filters/cities`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide information about training event trainers
     *
     * @tags training-events, training-events-trainers
     * @name GetTrainingEventTrainers
     * @summary get training event trainers
     * @request GET:/delegate/training-events/{id}/trainers
     * @secure
     * @response `200` `MembersConfirmationResponse` trainers
     */
    getTrainingEventTrainers: (
      id: number,
      query: {
        /**
         * type of training event trainers; one of [0, 1, 2, 3]; 0 stands for "user"; 1 - "group"; 2 - "organization"; 3 - "role"]
         * @format int32
         */
        memberType: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<MembersConfirmationResponse, any>({
        path: `/delegate/training-events/${id}/trainers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of assignment categories
     *
     * @tags assignments, assignment
     * @name GetAssignmentCategories
     * @summary Get assignment categories
     * @request GET:/delegate/valamis-assignments/assignments/{id}/categories
     * @secure
     * @response `200` `(AssignmentsCategory)[]` list of categories
     */
    getAssignmentCategories: (id: number, params: RequestParams = {}) =>
      this.request<AssignmentsCategory[], any>({
        path: `/delegate/valamis-assignments/assignments/${id}/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get assignment information
     *
     * @tags assignments, assignment
     * @name GetAssignment
     * @summary Get assignment
     * @request GET:/delegate/valamis-assignments/assignments/{id}
     * @secure
     * @response `200` `AssignmentResponse` assignment information
     */
    getAssignment: (id: number, params: RequestParams = {}) =>
      this.request<AssignmentResponse, any>({
        path: `/delegate/valamis-assignments/assignments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of assignments commentaries
     *
     * @tags assignments, assignment
     * @name GetAssignmentComments
     * @summary Get assignment comments
     * @request GET:/delegate/valamis-assignments/assignments/{id}/messages
     * @secure
     * @response `200` `(MessageResponse)[]` list of assignment commentaries
     */
    getAssignmentComments: (
      id: number,
      query?: {
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<MessageResponse[], any>({
        path: `/delegate/valamis-assignments/assignments/${id}/messages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description get list of assignment instructors' information records
     *
     * @tags assignments, assignment
     * @name GetAssignmentInstructors
     * @summary Get assignment instructors
     * @request GET:/delegate/valamis-assignments/assignments/{id}/instructors
     * @secure
     * @response `200` `(AssignmentsUserInfo)[]` list of assignment instructors
     */
    getAssignmentInstructors: (id: number, params: RequestParams = {}) =>
      this.request<AssignmentsUserInfo[], any>({
        path: `/delegate/valamis-assignments/assignments/${id}/instructors`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provide list of assignments
     *
     * @tags assignments, assignment
     * @name GetListOfAssignments
     * @summary Get list of assignments
     * @request GET:/delegate/valamis-assignments/assignments
     * @secure
     * @response `200` `Any` list of assignments
     */
    getListOfAssignments: (
      query?: {
        /** text to filter assignments by; it will perform full text search in assignment title and body */
        filter?: string;
        /**
         * number to filter assignments by status; one of [0, 1]; 0 stands for draft assignments; 1 stands for published assignments
         * @format int32
         */
        status?: number;
        /**
         * id of category to filter assignments by
         * @format int64
         */
        categoryId?: number;
        /**
         * sorting order; one of ["title", "-title", "deadline"]
         * @default ""title""
         */
        sort?: string;
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * should assignment with passed deadline be shown
         * @default "true"
         */
        showExpired?: boolean;
        /**
         * should user status information be attached to the result
         * @default "false"
         */
        withUserStatus?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Any, any>({
        path: `/delegate/valamis-assignments/assignments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get user's list of submissions
     *
     * @tags assignments, assignment
     * @name GetUserSSubmissions
     * @summary Get user's submissions
     * @request GET:/delegate/valamis-assignments/assignments/{id}/submissions/{ownerId}
     * @secure
     * @response `200` `(SubmissionResponse)[]` list of submissions
     */
    getUserSSubmissions: (id: number, submitterId: number, ownerId: string, params: RequestParams = {}) =>
      this.request<SubmissionResponse[], any>({
        path: `/delegate/valamis-assignments/assignments/${id}/submissions/${ownerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get evaluations for the given submissions
     *
     * @tags assignments, assignment-submissions
     * @name GetSubmissionEvaluations
     * @summary Get submission evaluations
     * @request GET:/delegate/valamis-assignments/submissions/{id}/evaluations
     * @secure
     * @response `200` `(EvaluationResponse)[]` list of evaluations
     */
    getSubmissionEvaluations: (id: number, params: RequestParams = {}) =>
      this.request<EvaluationResponse[], any>({
        path: `/delegate/valamis-assignments/submissions/${id}/evaluations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Provide list of categories which are used by assignments so far
     *
     * @tags assignments, assignment-categories
     * @name GetUsedCategories
     * @summary Get used categories
     * @request GET:/delegate/valamis-assignments/categories
     * @secure
     * @response `200` `(AssignmentsCategory)[]` list of categories
     */
    getUsedCategories: (params: RequestParams = {}) =>
      this.request<AssignmentsCategory[], any>({
        path: `/delegate/valamis-assignments/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Provide all available categories
     *
     * @tags assignments, assignment-categories
     * @name GetAllCategories
     * @summary Get all categories
     * @request GET:/delegate/valamis-assignments/categories/all
     * @secure
     * @response `200` `(AssignmentsCategory)[]` list of available categories
     */
    getAllCategories: (params: RequestParams = {}) =>
      this.request<AssignmentsCategory[], any>({
        path: `/delegate/valamis-assignments/categories/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of assignment attachments
     *
     * @tags assignments, assignment-attachments
     * @name GetAssignmentAttachments
     * @summary Get assignment attachments
     * @request GET:/delegate/valamis-assignments/assignments/{id}/attachments
     * @secure
     * @response `200` `(Attachment)[]` list of attachments
     */
    getAssignmentAttachments: (id: number, params: RequestParams = {}) =>
      this.request<Attachment[], any>({
        path: `/delegate/valamis-assignments/assignments/${id}/attachments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of submission attachments
     *
     * @tags assignments, assignments-attachments
     * @name GetSubmissionAttachments
     * @summary Get submission attachments
     * @request GET:/delegate/valamis-assignments/submissions/{id}/attachments
     * @secure
     * @response `200` `(Attachment)[]` list of submission attachments
     */
    getSubmissionAttachments: (id: number, params: RequestParams = {}) =>
      this.request<Attachment[], any>({
        path: `/delegate/valamis-assignments/submissions/${id}/attachments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of assignment group members
     *
     * @tags assignments, assignment-groups
     * @name GetListOfGroupMembers
     * @summary Get list of group members
     * @request GET:/delegate/valamis-assignments/groups/{id}/users
     * @secure
     * @response `200` `(UserInfoResponse)[]` list of group members
     */
    getListOfGroupMembers: (
      id: number,
      query?: {
        /**
         * how many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * how many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserInfoResponse[], any>({
        path: `/delegate/valamis-assignments/groups/${id}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get list of groups for the given assignment
 *
 * @tags assignments, assignment-groups
 * @name GetAssignmentGroups
 * @summary Get assignment groups
 * @request GET:/delegate/valamis-assignments/assignments/{id}/groups
 * @secure
 * @response `200` `{
  \** @format int64 *\
    total: number,
    items: (AssignmentGroupSearchResult)[],

}` list of assignment groups
 */
    getAssignmentGroups: (
      id: number,
      query?: {
        /** text to filter assignments by */
        filter?: string;
        /**
         * sorting order; one of ["title", "-title", "status"];
         * @default " "title""
         */
        sort?: string;
        /**
         * status code number (only groups with existing submissions having given status will be included in the result); one of [0, 1, 2, 3, 4]; 0 stands for "waiting for submission", 1 - "waiting for evaluation", 2 - "completed", 3 - "returned for improvement", 4 - "failed"
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format int64 */
          total: number;
          items: AssignmentGroupSearchResult[];
        },
        any
      >({
        path: `/delegate/valamis-assignments/assignments/${id}/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  o = {
    /**
     * @description Test if the scim module is deployed and working
     *
     * @tags scim
     * @name PingScim
     * @summary Ping scim
     * @request GET:/o/scim-rest/scim/ping
     * @response `200` `void` Scim OK
     */
    pingScim: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/o/scim-rest/scim/ping`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Non-standard check password method
     *
     * @tags scim
     * @name ValidateUserCredentials
     * @summary Validate user credentials
     * @request POST:/o/scim-rest/scim/check-password
     * @secure
     * @response `200` `UserResourceResponse` Found user is returned
     * @response `404` `void` No user found with given credentials
     */
    validateUserCredentials: (
      data: UserCredentialsResource,
      query?: {
        /** Attributes that are excluded from the response */
        excludedAttributes?: string;
        /** Define attributes that are returned in response */
        attributes?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserResourceResponse, void>({
        path: `/o/scim-rest/scim/check-password`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns Valamis SCIM supported resource schemas.
     *
     * @tags scim
     * @name GetAllSchemas
     * @summary Get all schemas
     * @request GET:/o/scim-rest/scim/Schemas
     * @secure
     * @response `200` `void` Schemas are returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Schemas not found
     */
    getAllSchemas: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/o/scim-rest/scim/Schemas`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get Valamis SCIM supported schema by name
     *
     * @tags scim
     * @name GetSchemaByName
     * @summary Get schema by name
     * @request GET:/o/scim-rest/scim/Schemas/{name}
     * @secure
     * @response `200` `void` Schema is returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Schema not found
     */
    getSchemaByName: (name: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/o/scim-rest/scim/Schemas/${name}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get Oauth2 token
     *
     * @tags oauth2
     * @name GetOauth2Token
     * @summary Get Oauth2 token
     * @request POST:/o/scim-rest/scim/oauth2/token
     * @response `200` `Token` Oauth2 tokens returned
     * @response `403` `void` Company configuration missing or client information incorrect
     */
    getOauth2Token: (data: ClientCredentials, params: RequestParams = {}) =>
      this.request<Token, void>({
        path: `/o/scim-rest/scim/oauth2/token`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns Valamis SCIM supported service provider configuration schema as defined in https://tools.ietf.org/html/rfc7643#section-5
     *
     * @tags scim
     * @name GetServiceprovidergonfig
     * @summary Get serviceProviderGonfig
     * @request GET:/o/scim-rest/scim/ServiceProviderConfig
     * @secure
     * @response `200` `void`
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `500` `void` Internal server error
     */
    getServiceprovidergonfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/o/scim-rest/scim/ServiceProviderConfig`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get serviceProviderGonfigs
     *
     * @tags scim
     * @name GetServiceprovidergonfigs
     * @summary Get serviceProviderGonfigs
     * @request GET:/o/scim-rest/scim/ServiceProviderConfigs
     * @secure
     * @response `200` `void`
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `500` `void` Internal server error
     */
    getServiceprovidergonfigs: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/o/scim-rest/scim/ServiceProviderConfigs`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get list of all users in the system for this company.
     *
     * @tags scim, users
     * @name GetAllUsers
     * @summary Get all users
     * @request GET:/o/scim-rest/scim/Users
     * @secure
     * @response `200` `UserListResponseSchema` Users list is returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `500` `void` Internal server error
     */
    getAllUsers: (
      query?: {
        /** Filter users by field name */
        filter?: string;
        /**
         * Starting index of users list
         * @format int32
         */
        startIndex?: number;
        /**
         * Number of users in response
         * @format int32
         */
        count?: number;
        /** ExternalId of user(s) */
        externalId?: string;
        /**
         * Id of company, which users to return
         * @format int32
         */
        companyId?: number;
        /** Attributes that are excluded form the response */
        excludedAttributes?: string;
        /** Define attributes that are returned */
        attributes?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserListResponseSchema, void>({
        path: `/o/scim-rest/scim/Users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new user with data described in body.
     *
     * @tags scim, users
     * @name CreateUser
     * @summary Create user
     * @request POST:/o/scim-rest/scim/Users
     * @secure
     * @response `201` `UserResourceResponse` Creted user is returned
     * @response `400` `void` Bad request
     * @response `403` `void` Request does not have valid OAuth2 tokens
     * @response `409` `void` User already exists
     */
    createUser: (data: UserResourceRequest, params: RequestParams = {}) =>
      this.request<UserResourceResponse, void>({
        path: `/o/scim-rest/scim/Users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get basic information of single user by uuid from current company.
     *
     * @tags scim, users
     * @name GetSingleUser
     * @summary Get single user
     * @request GET:/o/scim-rest/scim/Users/{uuid}
     * @secure
     * @response `200` `UserResourceResponse` Basic information of the user is returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     */
    getSingleUser: (
      uuid: string,
      query?: {
        /**
         * Id of company, which users to return
         * @format int64
         */
        companyId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserResourceResponse, void>({
        path: `/o/scim-rest/scim/Users/${uuid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete single user by uuid from current company.
     *
     * @tags scim, users
     * @name DeleteSingleUser
     * @summary Delete single user
     * @request DELETE:/o/scim-rest/scim/Users/{uuid}
     * @secure
     * @response `200` `void` User deleted succesfully
     * @response `204` `void` User with uuid not found
     * @response `404` `void` Resource not available
     */
    deleteSingleUser: (uuid: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/o/scim-rest/scim/Users/${uuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Updates an user with data described in body by uuid.
     *
     * @tags scim, users
     * @name UpdateSingleUser
     * @summary Update single user
     * @request PUT:/o/scim-rest/scim/Users/{uuid}
     * @secure
     * @response `201` `UserResourceResponse` User updated succesfully
     * @response `400` `void` Invalid request
     * @response `403` `void` Request does not have valid OAuth2 tokens
     * @response `404` `void` User not found
     */
    updateSingleUser: (uuid: string, data: UserResourceRequest, params: RequestParams = {}) =>
      this.request<UserResourceResponse, void>({
        path: `/o/scim-rest/scim/Users/${uuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Patch an user with data described in body by uuid.
     *
     * @tags scim, users
     * @name PatchUser
     * @summary Patch user
     * @request PATCH:/o/scim-rest/scim/Users/{uuid}
     * @secure
     * @response `201` `UserResourceResponse` User updated succesfully
     * @response `403` `void` Request does not have valid OAuth2 tokens
     * @response `404` `void` User not found
     */
    patchUser: (uuid: string, data: PatchRequest, params: RequestParams = {}) =>
      this.request<UserResourceResponse, void>({
        path: `/o/scim-rest/scim/Users/${uuid}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of all groups in the system for this company.
     *
     * @tags scim, groups
     * @name GetAllGroups
     * @summary Get all groups
     * @request GET:/o/scim-rest/scim/Groups
     * @secure
     * @response `200` `GroupListResponseSchema` All groups in the company are returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     */
    getAllGroups: (
      query?: {
        /** Filter groups by field name */
        filter?: string;
        /**
         * Starting index of groups list
         * @format int32
         */
        startIndex?: number;
        /** Excluded attributes */
        excludedAttributes?: string;
        /**
         * Number of groups in response
         * @format int32
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GroupListResponseSchema, void>({
        path: `/o/scim-rest/scim/Groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a new user group with data descibed in body.
     *
     * @tags scim, groups
     * @name CreateGroup
     * @summary Create group
     * @request POST:/o/scim-rest/scim/Groups
     * @secure
     * @response `200` `GroupResponseResource` Created group is returned
     * @response `400` `void` Invalid request
     * @response `403` `void` Request does not have valid OAuth2 tokens
     * @response `409` `void` User group already exists
     */
    createGroup: (data: GroupRequestResource, params: RequestParams = {}) =>
      this.request<GroupResponseResource, void>({
        path: `/o/scim-rest/scim/Groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get basic information of single group by uuid from current company.
     *
     * @tags scim, groups
     * @name GetSingleGroup
     * @summary Get single group
     * @request GET:/o/scim-rest/scim/Groups/{uuid}
     * @secure
     * @response `200` `GroupResponseResource` Group is returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Group not found
     */
    getSingleGroup: (
      uuid: string,
      query?: {
        /** Attributes to exclude from query */
        excludedAttributes?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GroupResponseResource, void>({
        path: `/o/scim-rest/scim/Groups/${uuid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update single group by uuid from current company.
     *
     * @tags scim, groups
     * @name UpdateSingleGroup
     * @summary Update single group
     * @request PUT:/o/scim-rest/scim/Groups/{uuid}
     * @secure
     * @response `200` `GroupResponseResource` Updated group is returned
     * @response `400` `void` Invalid request
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Group not found
     */
    updateSingleGroup: (uuid: string, data: GroupRequestResource, params: RequestParams = {}) =>
      this.request<GroupResponseResource, void>({
        path: `/o/scim-rest/scim/Groups/${uuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update single group by uuid from current company.
     *
     * @tags scim, groups
     * @name PatchGroup
     * @summary Patch group
     * @request PATCH:/o/scim-rest/scim/Groups/{uuid}
     * @secure
     * @response `200` `GroupResponseResource` Patched group is returned
     * @response `400` `void` Invalid request
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Group not found
     */
    patchGroup: (uuid: string, data: PatchOperation, params: RequestParams = {}) =>
      this.request<GroupResponseResource, void>({
        path: `/o/scim-rest/scim/Groups/${uuid}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete single group by uuid from current company.
     *
     * @tags scim, groups
     * @name DeleteSingleGroup
     * @summary Delete single group
     * @request DELETE:/o/scim-rest/scim/Groups/{uuid}
     * @secure
     * @response `204` `void` Group deleted
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Group not found to delete
     */
    deleteSingleGroup: (uuid: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/o/scim-rest/scim/Groups/${uuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get list of all organizations in the system for this company.
     *
     * @tags scim, organizations
     * @name GetAllOrganizations
     * @summary Get all organizations
     * @request GET:/o/scim-rest/scim/Organizations
     * @secure
     * @response `200` `OrganizationListResponseSchema` Organization information is returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     */
    getAllOrganizations: (
      query?: {
        /** Filter organizations by field name */
        filter?: string;
        /**
         * Starting index of organizations list
         * @format int32
         */
        startIndex?: number;
        /** Excluded attributes */
        excludedAttributes?: string;
        /**
         * Number of organizations in response
         * @format int32
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrganizationListResponseSchema, void>({
        path: `/o/scim-rest/scim/Organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a new organization with data descibed in body.
     *
     * @tags scim, organizations
     * @name CreateOrganization
     * @summary Create organization
     * @request POST:/o/scim-rest/scim/Organizations
     * @secure
     * @response `200` `OrganizationResponseResource` Created organization is returned
     * @response `400` `void` Invalid request
     * @response `403` `void` Request does not have valid OAuth2 tokens
     * @response `409` `void` Organization already exists
     */
    createOrganization: (data: OrganizationRequestResource, params: RequestParams = {}) =>
      this.request<OrganizationResponseResource, void>({
        path: `/o/scim-rest/scim/Organizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get basic information of single organization by uuid from current company.
     *
     * @tags scim, organizations
     * @name GetSingleOrganization
     * @summary Get single organization
     * @request GET:/o/scim-rest/scim/Organizations/{uuid}
     * @secure
     * @response `200` `OrganizationResponseResource` Organization information is returned
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Organization not found
     */
    getSingleOrganization: (
      uuid: string,
      query?: {
        /** Attributes to exclude from query */
        excludedAttributes?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrganizationResponseResource, void>({
        path: `/o/scim-rest/scim/Organizations/${uuid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update single organization by uuid from current company.
     *
     * @tags scim, organizations
     * @name UpdateSingleOrganization
     * @summary Update single organization
     * @request PUT:/o/scim-rest/scim/Organizations/{uuid}
     * @secure
     * @response `200` `OrganizationResponseResource` Organization information is returned
     * @response `400` `void` Invalid request
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Organization not found
     */
    updateSingleOrganization: (uuid: string, data: OrganizationRequestResource, params: RequestParams = {}) =>
      this.request<OrganizationResponseResource, void>({
        path: `/o/scim-rest/scim/Organizations/${uuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Patch single organization by uuid from current company.
     *
     * @tags scim, organizations
     * @name PatchOrganization
     * @summary Patch organization
     * @request PATCH:/o/scim-rest/scim/Organizations/{uuid}
     * @secure
     * @response `200` `OrganizationResponseResource` Patched organization information is returned
     * @response `400` `void` Invalid request
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Organization not found
     */
    patchOrganization: (uuid: string, data: PatchOperation, params: RequestParams = {}) =>
      this.request<OrganizationResponseResource, void>({
        path: `/o/scim-rest/scim/Organizations/${uuid}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete single organization by uuid from current company.
     *
     * @tags scim, organizations
     * @name DeleteSingleOrganization
     * @summary Delete single organization
     * @request DELETE:/o/scim-rest/scim/Organizations/{uuid}
     * @secure
     * @response `204` `void` Organization deleted
     * @response `403` `void` Request does not have valid Oauth2 tokens
     * @response `404` `void` Organization not found to delete
     */
    deleteSingleOrganization: (uuid: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/o/scim-rest/scim/Organizations/${uuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  vApi = {
    /**
     * @description Get profile firstName and lastName
     *
     * @tags profile, profileName, get
     * @name GetProfileNames
     * @summary Get profile names
     * @request GET:/v-api/valamis-profile/v1/names/:profileId
     * @secure
     * @response `200` `ProfileName` return a profile firstName and lastName
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Profile not found or profileId is incorrect
     */
    getProfileNames: (profileId: string, params: RequestParams = {}) =>
      this.request<ProfileName, void>({
        path: `/v-api/valamis-profile/v1/names/${profileId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete custom field
     *
     * @tags profile, fields, delete
     * @name DeleteCustomField
     * @summary Delete custom field
     * @request DELETE:/v-api/valamis-profile/v1/fields/:fieldId
     * @secure
     * @response `204` `void` Custom field successfully deleted
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Field is not found
     */
    deleteCustomField: (fieldId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/fields/${fieldId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update custom field
     *
     * @tags profile, fields, update
     * @name UpdateCustomField
     * @summary Update custom field
     * @request PUT:/v-api/valamis-profile/v1/fields/:fieldId
     * @secure
     * @response `204` `void` Custom field successfully updated
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Field is not found
     * @response `409` `void` Conflicts found
     */
    updateCustomField: (fieldId: string, data: FieldUpdate, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/fields/${fieldId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get custom field
     *
     * @tags profile, fields, get
     * @name GetCustomField
     * @summary Get custom field
     * @request GET:/v-api/valamis-profile/v1/fields/:fieldId
     * @secure
     * @response `200` `FieldResponse` Return custom field
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Field is not found
     */
    getCustomField: (fieldId: string, params: RequestParams = {}) =>
      this.request<FieldResponse, void>({
        path: `/v-api/valamis-profile/v1/fields/${fieldId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Search a list of fields
     *
     * @tags profile, fields, search
     * @name GetFields
     * @summary Get a list of fields
     * @request GET:/v-api/valamis-profile/v1/fields
     * @secure
     * @response `200` `(FieldResponse)[]` Return a list of fields
     * @response `400` `void` One of query params is incorrect
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    getFields: (
      query?: {
        /**
         * How many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * How many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /** Filtering by including substring in field name */
        search?: string;
        /** Get fields those not in some group (or only is some group, when param is false) */
        withoutGroup?: boolean;
        /**
         * Sorting parameter; Supported values: "createdDate", "createdDateDesc", "name", "nameDesc"
         * @default "createdDateDesc"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FieldResponse[], void>({
        path: `/v-api/valamis-profile/v1/fields`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create custom field
     *
     * @tags profile, fields, create
     * @name CreateCustomField
     * @summary Create custom field
     * @request POST:/v-api/valamis-profile/v1/fields
     * @secure
     * @response `200` `FieldResponse` Custom field successfully created
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflicts found
     */
    createCustomField: (data: FieldCreate, params: RequestParams = {}) =>
      this.request<FieldResponse, void>({
        path: `/v-api/valamis-profile/v1/fields`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete an integrated field
     *
     * @tags profile, fields, integration, delete
     * @name DeleteAnIntegratedField
     * @summary Delete an integrated field
     * @request DELETE:/v-api/valamis-profile/v1/integration/fields/:fieldId
     * @secure
     * @response `204` `void` Integrated field successfully deleted
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Field is not found
     */
    deleteAnIntegratedField: (fieldId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/integration/fields/${fieldId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update an integrated field
     *
     * @tags profile, fields, integration, update
     * @name UpdateAnIntegratedField
     * @summary Update an integrated field
     * @request PUT:/v-api/valamis-profile/v1/integration/fields/:fieldId
     * @secure
     * @response `204` `void` Integrated field successfully updated
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Field is not found
     * @response `409` `void` Conflicts found
     */
    updateAnIntegratedField: (fieldId: string, data: FieldUpdate, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/integration/fields/${fieldId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get an integrated field
     *
     * @tags profile, fields, integration, get
     * @name GetAnIntegratedField
     * @summary Get an integrated field
     * @request GET:/v-api/valamis-profile/v1/integration/fields/:fieldId
     * @secure
     * @response `200` `number` Return an integrated field
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Field is not found
     */
    getAnIntegratedField: (fieldId: string, params: RequestParams = {}) =>
      this.request<number, void>({
        path: `/v-api/valamis-profile/v1/integration/fields/${fieldId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Search a list of fields
     *
     * @tags profile, fields, integration, search
     * @name ListIntegrationFields
     * @summary Get a list of fields
     * @request GET:/v-api/valamis-profile/v1/integration/fields
     * @secure
     * @response `200` `IndexedParserInputListIntegrationFieldResponse` Return a list of integrated fields
     * @response `400` `void` One of the query params is incorrect
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    listIntegrationFields: (
      query?: {
        /**
         * How many entries to skip from the result
         * @format int32
         * @default "0"
         */
        skip?: number;
        /**
         * How many entries to take from the result; can't be more than 500
         * @format int32
         * @default "20"
         */
        take?: number;
        /**
         * Sorting parameter; Supported values: "createdDate", "createdDateDesc", "name", "nameDesc"
         * @default "createdDateDesc"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexedParserInputListIntegrationFieldResponse, void>({
        path: `/v-api/valamis-profile/v1/integration/fields`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a field
     *
     * @tags profile, fields, integration, create
     * @name CreateAField
     * @summary Create a field
     * @request POST:/v-api/valamis-profile/v1/integration/fields
     * @secure
     * @response `200` `number` Field successfully created
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflicts found
     */
    createAField: (data: FieldCreate, params: RequestParams = {}) =>
      this.request<number, void>({
        path: `/v-api/valamis-profile/v1/integration/fields`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update profile additional fields
     *
     * @tags profile, profileData, update
     * @name UpdateIntegrationProfileFields
     * @summary Update profile additional fields
     * @request PUT:/v-api/valamis-profile/v1/integration/profile-data/:profileId
     * @secure
     * @response `204` `void` profile additional fields successfully updated
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Profile not found or profileId is incorrect
     * @response `409` `void` Conflicts found
     */
    updateIntegrationProfileFields: (profileId: string, data: ProfileDataUpdateRequest[], params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/integration/profile-data/${profileId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get profile data field
     *
     * @tags profile, profileData, field, getOne
     * @name GetProfileDataField
     * @summary Get profile data field
     * @request GET:/v-api/valamis-profile/v1/profile-data/:profileId/:fieldName
     * @secure
     * @response `200` `ProfileDataFieldResponse` Profile data field
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Profile or field not found
     */
    getProfileDataField: (profileId: string, fieldName: string, params: RequestParams = {}) =>
      this.request<ProfileDataFieldResponse, void>({
        path: `/v-api/valamis-profile/v1/profile-data/${profileId}/${fieldName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Download CSV file contains profile data
     *
     * @tags profile, profileData, export, csv
     * @name DownloadCsvFileContainsProfileData
     * @summary Download CSV file contains profile data
     * @request GET:/v-api/valamis-profile/v1/profile-data/:profileId/export/csv
     * @secure
     * @response `200` `void` Return a CSV file, contains profile data
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Profile not found or profileId is incorrect
     */
    downloadCsvFileContainsProfileData: (profileId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/profile-data/${profileId}/export/csv`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Update profile additional fields
     *
     * @tags profile, profileData, update
     * @name UpdateProfileFields
     * @summary Update profile additional fields
     * @request PUT:/v-api/valamis-profile/v1/profile-data/:profileId
     * @secure
     * @response `204` `void` profile additional fields successfully updated
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Profile not found or profileId is incorrect
     * @response `409` `void` Conflicts found
     */
    updateProfileFields: (profileId: string, data: ProfileDataUpdateRequest[], params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/profile-data/${profileId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get profile data list
     *
     * @tags profile, profileData, sections
     * @name GetProfileDataList
     * @summary Get profile data list
     * @request GET:/v-api/valamis-profile/v1/profile-data/:profileId
     * @secure
     * @response `200` `(ProfileDataGroupResponse)[]` Profile data list
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Profile not found or profileId is incorrect
     */
    getProfileDataList: (profileId: string, params: RequestParams = {}) =>
      this.request<ProfileDataGroupResponse[], void>({
        path: `/v-api/valamis-profile/v1/profile-data/${profileId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get fields without group. Returns only first 100 results
     *
     * @tags profile, sections, fields, get
     * @name GetFieldsWithoutGroup
     * @summary Get fields without group
     * @request GET:/v-api/valamis-profile/v1/profile-sections/free-fields
     * @secure
     * @response `200` `(SectionField)[]` List of fields of profile sections
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    getFieldsWithoutGroup: (params: RequestParams = {}) =>
      this.request<SectionField[], void>({
        path: `/v-api/valamis-profile/v1/profile-sections/free-fields`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update profile sections
     *
     * @tags profile, sections, update
     * @name UpdateProfileSections
     * @summary Update profile sections
     * @request PUT:/v-api/valamis-profile/v1/profile-sections
     * @secure
     * @response `204` `void` Profile sections successfully updated
     * @response `400` `void` Some errors in request body
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflicts found
     * @response `422` `void` Some validation errors (e.g. group with given id not found)
     */
    updateProfileSections: (data: SectionUpdate[], params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v-api/valamis-profile/v1/profile-sections`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get profile sections. Returns only first 100 results
     *
     * @tags profile, sections, get
     * @name GetProfileSections
     * @summary Get profile sections
     * @request GET:/v-api/valamis-profile/v1/profile-sections
     * @secure
     * @response `200` `(SectionResponse)[]` List of profile sections
     * @response `400` `void` Some validation errors
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    getProfileSections: (params: RequestParams = {}) =>
      this.request<SectionResponse[], void>({
        path: `/v-api/valamis-profile/v1/profile-sections`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
