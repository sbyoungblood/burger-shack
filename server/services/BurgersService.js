import { fakeDb } from "../db/FakeDb"

class BurgersService{
  getBurgers() {
    return fakeDb.burgers
  }

}

export const burgersService = new BurgersService