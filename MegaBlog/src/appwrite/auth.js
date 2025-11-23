import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.aapwriteUrl) // Your Appwrite Endpoint
      .setProject(conf.aapwriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // agr user account hai to usko seedha login kara do to yahan pr login method return hoga
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      //   return error;
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      //   return error;
      throw new Error(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;

// *********** practice ***********
// export class AuthService {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//       .setEndpoint(conf.aapwriteUrl)
//       .setProject(conf.aapwriteProjectId);
//     this.account = new Account(this.client);
//   }

//   async createAccount({ email, password, name }) {
//     try {
//       const userAccount = await this.account.create(
//         ID.unique(),
//         email,
//         password,
//         name
//       );
//       if (userAccount) {
//         //return login if have an account
//         return this.login({ email, password });
//       } else {
//         return userAccount;
//       }
//     } catch (error) {
//       return error;
//     }
//   }

//   async login({ email, password }) {
//     try {
//       return await this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//       return error;
//     }
//   }

//   async getCurrentUser() {
//     try {
//       return await this.account.get();
//     } catch (error) {
//       return error;
//     }
//   }

//   async logout() {
//     try {
//       return await this.account.deleteSessions();
//     } catch (error) {
//       return error;
//     }
//   }
// }

// const authService = new AuthService();

// export default authService;
