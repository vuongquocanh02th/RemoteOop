class Remote {
    constructor(code) {
        this.code = code; // Mã điều khiển
    }

    changeChannel(tv, channel) {
        tv.setChannel(channel); // Gọi phương thức chuyển kênh trên tivi
    }

    changeVolume(tv, volumeChange) {
        tv.adjustVolume(volumeChange); // Gọi phương thức điều chỉnh âm lượng trên tivi
    }

    turnOff(tv) {
        tv.powerOff(); // Gọi phương thức tắt tivi
    }
}
class TiVi {
    constructor() {
        this.currentChannel = 1; // Kênh mặc định
        this.currentVolume = 10; // Âm lượng mặc định
        this.isOn = false; // Tivi tắt mặc định
    }

    powerOn() {
        this.isOn = true;
        console.log("Tivi đã bật.");
    }

    powerOff() {
        this.isOn = false;
        console.log("Tivi đã tắt.");
    }

    setChannel(channel) {
        if (this.isOn) {
            this.currentChannel = channel;
            console.log(`Chuyển đến kênh ${this.currentChannel}.`);
        } else {
            console.log("Tivi đang tắt. Không thể chuyển kênh.");
        }
    }

    adjustVolume(volumeChange) {
        if (this.isOn) {
            this.currentVolume += volumeChange;
            console.log(`Âm lượng hiện tại: ${this.currentVolume}.`);
        } else {
            console.log("Tivi đang tắt. Không thể điều chỉnh âm lượng.");
        }
    }
}
// Khai báo và khởi tạo một chiếc Tivi
const myTV = new TiVi();

// Khai báo và khởi tạo một chiếc Remote
const myRemote = new Remote('RMT001');

// Bật tivi
myTV.powerOn();

// Chuyển đến kênh 7
myTV.setChannel(7);

// Dùng remote chuyển đến kênh 3
myRemote.changeChannel(myTV, 3);

// Tăng âm lượng lên 2 đơn vị
myRemote.changeVolume(myTV, 2);

// Dùng remote tắt tivi
myRemote.turnOff(myTV);
