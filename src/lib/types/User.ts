export default interface User {
    _id: string;
    active: boolean;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
    name: string;
    email: string;
    phone: string;
    roles: string[];
    sex: string;
    photoUrl: string;
    onboarded: boolean;
    online: boolean;
    registrationToken: string;
    firebaseUserId: string;
    languages: string[];
    city: string;
    country: string;
    latitude: string;
    longitude: string;
    province: string;
    intro: string;
}
