export interface IUser {
    name: {
        title: string;
        first: string;
        last: string;
      };
      email: string;
      location: {
        street: {
          number: number;
          name: string;
        };
        city: string;
        state: string;
        country: string;
      };
      coordinates:{
        latitude:number,
        longitude:number
      },
      gender: string;
      picture: {
        large: string;
        medium: string;
        
      };

}
