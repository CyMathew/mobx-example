import { observable } from 'mobx'

const Store = observable({
    insideDetail: '',
    outsideDetail: '',
    changeInsideDetail() {
        this.insideDetail = 'hsla(' + (Math.floor(Math.random() * 360)) + ', 100%, 70%, 1)'
    },
    changeOutsideDetail() {
        this.outsideDetail = 'hsla(' + (Math.floor(Math.random() * 360)) + ', 100%, 70%, 1)'
    }
});

export default Store;