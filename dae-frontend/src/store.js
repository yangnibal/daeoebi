import { observable } from 'mobx'

export default class Store{
    @observable schoolyear = [
        { value: "E1", label: "초1" },
        { value: "E2", label: "초2" },
        { value: "E3", label: "초3" },
        { value: "E4", label: "초4" },
        { value: "E5", label: "초5" },
        { value: "E6", label: "초6" },
        { value: "M1", label: "중1" },
        { value: "M2", label: "중2" },
        { value: "M3", label: "중3" },
        { value: "H1", label: "고1" },
        { value: "H2", label: "고2" },
        { value: "H3", label: "고3" },
    ]
    @observable semester = [
        { value: "1_M", label: "1학기 중간" },
        { value: "1_F", label: "1학기 기말" },
        { value: "2_M", label: "2학기 중간" },
        { value: "2_F", label: "2학기 기말" },
    ]
    @observable subject = [
        { value: "math", label: "수학" },
        { value: "english", label: "영어" },
        { value: "korean", label: "국어" },
        { value: "science", label: "과학" },
    ]
}
