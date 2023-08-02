class Hotel {
    address = "";
    numOfRooms = 0;
    #minFloor = 22;
    #maxFloor = 7;
    rooms = [];
    constructor(address, numOfRooms) {
      this.address = address;
      this.numOfRooms = numOfRooms;
    }
  
    printAdvertisement() {
      console.log("****************************");
      console.log(this.address);
      console.log(`The number of rooms${this.numOfRooms} Rooms`);
      console.log("****************************");
    }
  
    listBookedRooms() {
      console.log("****************************");
      console.log("Booked Rooms:");
      this.rooms.forEach(room => {
        if (room.isBooked) {
          room.print();
        }
      });
      console.log("****************************");
    }
  }
  
  class Room {
    floorNum;
    roomNum;
    price = 0;
    #isBooked = false;
  
    constructor(floorNum, roomNum, price) {
      this.floorNum = floorNum;
      this.roomNum = roomNum;
      this.price = price;
    }
  
    print() {
      console.log("----------------------");
      console.log(`FloorNum: ${this.floorNum}:: RoomNum ${this.roomNum}, cost: ${this.price}`);
      console.log("----------------------");
    }
    book() {
      this.#isBooked = true;
    }
    get isBooked() {
      return this.#isBooked;
    }
  }
  
  class RoomWithView extends Room {
    view = "";
    numOfBeds = 0;
    constructor(floorNum, roomNum, price, view, numOfBeds) {
      super(floorNum, roomNum, price);
      this.numOfBeds = numOfBeds;
      this.view = view;
    }
    print() {
      console.log("----------------------");
      console.log(`Room: ${this.floorNum}${this.roomNum}, cost: ${this.price}`);
      console.log(`View: ${this.view}, Num of Beds: ${this.numOfBeds}`);
      console.log("----------------------");
    }
  }
  
  class SleepingRoom extends Room {
    personCapacity = 0;
    constructor(floorNum, roomNum, price, personCapacity) {
      super(floorNum, roomNum, price);
      this.personCapacity = personCapacity;
    }
  }
  
  const main = () => {
    const bbHotel = new Hotel(" Hotel\n Jenin - city center - 1St", 70);
    const p1 = new Room(11, 10, 100);
    const p2 = new RoomWithView(7, 11, 200, "island", 6);
    const p3 = new RoomWithView(9, 22, 600, "tower", 8);
    const p4 = new SleepingRoom(4, 20, 400, 13);
    const p5 = new Room(15, 82, 600);
    bbHotel.rooms = [p1,p2,p3,p4,p5];
    bbHotel.printAdvertisement();
    bbHotel.listBookedRooms();
    p1.book();
    p4.book();
    bbHotel.rooms[2].book();
    bbHotel.listBookedRooms();
  }
  
  main();