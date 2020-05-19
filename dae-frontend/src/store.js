import { observable } from 'mobx'

export default class Store{
    @observable testinfo = {}
    @observable studentinfo = {}
    @observable checkedStudents = []
    @observable schoolyear = [
        { value: "초1", label: "초1" },
        { value: "초2", label: "초2" },
        { value: "초3", label: "초3" },
        { value: "초4", label: "초4" },
        { value: "초5", label: "초5" },
        { value: "초6", label: "초6" },
        { value: "중1", label: "중1" },
        { value: "중2", label: "중2" },
        { value: "중3", label: "중3" },
        { value: "고1", label: "고1" },
        { value: "고2", label: "고2" },
        { value: "고3", label: "고3" },
    ]
    @observable semester = [
        { value: "1학기 중간", label: "1학기 중간" },
        { value: "1학기 기말", label: "1학기 기말" },
        { value: "2학기 중간", label: "2학기 중간" },
        { value: "2학기 기말", label: "2학기 기말" },
    ]
    @observable subject = [
        { value: "math", label: "수학" },
        { value: "english", label: "영어" },
        { value: "korean", label: "국어" },
        { value: "science", label: "과학" },
    ]
}
