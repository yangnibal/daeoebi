import React from 'react'
import './Signup.scss'
import Logo from '../images/logo2.png'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import axios from 'axios'

const Modal1 = ({goBack}) => {
    return (
        <div className="modal-container" onClick={goBack}>
            <div className="modal-sticky">
                <h3>[이용 약관]</h3>
                <div><br/>제1조(목적) 이 약관은 드림런(이하 회사)이 운영하는 사이트 회사에서 제공하는 인터넷 관련 서비스를 이용함에 있어 이를 이용하는 이용자와 회사의 권리·의무 및 책임사항을 규정함을 목적으로 한다.</div>
                <div><br/>제2조 (용어의 정의) 이 약관에서 사용하는 용어의 정의는 아래와 같다. ① 회사라 함은 인터넷 사이트 회사를 운영하는 회사를 말한다. ② 서비스 라 함은 인터넷 회사 및 정보통신설비등을 이용하여 회사가 회원들의 정보입력을통해 정보를 제공하는 내용 및 기타 관련된 서비스를 말한다. ③ 회원 이라 함은 인터넷 회사 서비스 이용을 목적으로 약관에 동의하여 이용자 ID를 부여받은 사람을 말한다. ④ 이용자ID 또는 회원ID라 함은 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 부여하는 문자와 숫자의 조합을 말한다. ⑤ 비밀번호라 함은 회사의 서비스를 이용하려는 사람이 이용자ID를 부여받은 자와 동일인임을 확인하고 회원의 권익을 보호하기 위하여 회원이 선정한 문자와 숫자의 조합을 말한다.</div>
                <div><br/>제3조 (약관의 효력 및 개정) 1. 이 약관은 인터넷 사이트 회사를 통하여 이를 공지하거나 전자우편 기타의 방법으로 회원에게 통지함으로써 효력이 발생됩니다. 2. 회사는 관련법규를 준수하는 범위내에서 이 약관을 개정할 수 있으며, 사정상 중요한 사유가 발생될 경우 사전 고지 없이 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생됩니다. 3. 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다. 4. 회사는 이 약관의 내용과 상호, 영업장 소재지, 대표자의 성명, 사업자등록번호, 연락처 등을 이용자가 알 수 있도록 게시하거나 기타의 방법으로 이용자에게 공지해야 한다.</div>
                <div><br/>제4조 (약관 외 준칙) 이 약관에서 규정하지 않은 사항에 관해서는 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진등에 관한 법률, 전자거래기본법, 신용정보이용및보호에관한법률, 기타 관련 법령의 규정에 따릅니다.</div>
                <div><br/>제5조 (이용신청의 승낙과 제한) ① 회사는 이용신청자의 처리를 특별한 경우를 제외하고는 접수순서에 따라 서비스 이용을 승낙하는것을 원칙으로한다. ② 회사는 다음 각 호의 1에 해당하는 이용계약 신청에 대하여는 이를 승낙하지 아니 할 수 있습니다. 1. 본인의 실명, 또는 개인정보를 정확히 기재하지 않는 경우 2. 다른 사람의 명의를 도용하여 신청한 경우 3. 기재된 내용중 허위로 기재하여 신청한 경우 4. 현행법규에 위배되는 내용이나 사회의 미풍양속을 저해할 목적으로 신청한 경우 5. 회원자격을 상실한 적이 있는 회원 6. 기타 회사가 서비스운영상 필요하다고 인정되거나, 업무에 문제가 있다고 판단되는 경우 ③ 회사는 아래 사항에 해당하는 경우에는 그 신청에 대하여 승낙을 유보할 수 있다. 1. 회사가 설비의 여유가 없는 경우 2. 회사의 기술상 지장이 있는 경우 3. 기타 회사의 사정상 필요하다고 인정되는 경우</div>
                <div><br/>제6조 (이용계약의 성립) ① 회사가 제공하는 서비스를 받고자 하는 자는 회원가입절차를 거쳐 회원으로 가입하여야 하며, 회원 가입희망자가 이 약관의 내용을 동의하고, 이용신청에 대하여 회사가 승낙함으로써 성립한다. ② 제1항의 승낙은 이용신청자의 본 약관에 대한 동의를 확인하고 전자메일의 매체를 통하여 통지함으로써 이용계약이 성립한다. ③ 서비스를 이용하고자 하는 자가 이용신청 당시 웹상의 동의함 버튼을 누르면 본 약관 및 개인정보보호정책에 대하여도 동의한 것으로 간주한다.</div>
                <div><br/>제7조 (서비스 이용신청) ① 회원으로 가입하여 본 서비스를 이용하고자 하는 이용고객은 회사에서 요구하는 제반정보를 가입신청 양식에 기록해 주어야 한다. ② 모든 회원은 제1항의 기입한 내용에 하자가 없어야만 서비스를 이용할 수 있으며, 기재내용이 허위로 등록된 경우에는 서비스 사용에대한 제한을 받을수 있을뿐만아니라, 사용자는 일체의 권리를 주장할 수 없다. ③ 타인의 명의를 도용하여 이용신청을 한 회원의 모든 ID는 삭제되며, 관계법령에 따라 처벌을 받을 수 있다.</div>
                <div><br/>제8조 (서비스의 내용) ① 회사는 제2조 1항의 서비스를 제공할 수 있으며 그 내용은 다음 각 호와 같다. 1. 현장관리 서비스 ② 회사는 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있다.</div>
                <div><br/>제9조 (정보의 제공) 회사는 회원이 서비스 이용중 필요가 있다고 인정되는 다양한 정보를 공지사항이나 전자우편 등의 방법으로 회원에게 제공할 수 있습니다.</div>
                <div><br/>제10조 (회원의 의무) ① 회원은 관계법령과 본 약관의 규정 및 기타 회사가 공지, 통지하는 사항을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 해서는 안 된다. ② 회원은 회원에게 부여된 ID와 비밀번호의 관리 소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있습니다.③ 회원은 자신의 ID나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는 즉시 회사에 알려야 하며, 알리지 않아 발생하는 모든 결과에 대한 책임은 회원에게 있습니다. ④ 회원은 회사가 공지사항에 게시하거나 별도로 공지한 이용제한 사항을 준수하여야 한다. ⑤ 회원은 회사의 사전승낙 없이는 서비스를 이용하여 영업활동을 할 수 없으며, 그 영업활동의 결과와 회원이 약관에 위반한 영업활동을 하여 발생한 결과에 대하여 회사는 책임을 지지 않는다. 회원은 이와 같은 영업활동으로 회사에 손해를 입은 경우 회원은 회사에 대하여 손해배상의무를 진다. ⑥ 회원은 회사의 명시적인 동의가 없는 한 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없다. ⑤ 회원은 본 서비스를 건전한 서비스이용 이외의 목적으로 사용해서는 안되며 이용 중 다음 각 호의 행위를 해서는 안 된다. 1. 범죄행위을 목적으로 하거나 기타 범죄행위와 관련된 행위 2. 공공질서 및 미풍양속에 위반되는 내용등을 전송, 게시, 전자메일 또는 기타의 방법으로 타인에게 유포하는 행위 3. 다른 회원의 ID와 비밀번호, 주민등록번호 등을 도용하는 행위 4. 회사의 직원이나 관리자를 가장하거나 사칭하여 내용물을 게시, 등록하거나 메일을 발송하는 행위 5. 타인의 명예를 훼손하거나 모욕하는 행위 6. 타인의 지적재산권 등의 권리를 침해하는 행위 7. 해킹행위 또는 바이러스의 유포 행위 8. 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 계속적으로 전송하는 행위 9. 서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있다고 판단되는 행위 10. 사이트의 정보 및 서비스를 이용한 영리 행위 11. 그밖에 선량한 풍속, 기타 사회질서를 해하거나 관계법령에 위반하는 행위 </div>
                <div><br/>제11조 (서비스 이용시간) ① 회사는 특별한 사유가 없는 한 연중무휴, 1일 24시간 서비스를 제공한다. 다만, 회사는 서비스의 종류나 성질에 따라 제공하는 서비스 중 일부에 대해서는 별도로 이용시간을 정할 수 있으며, 이 경우 회사는 그 이용시간을 사전에 회원에게 공지 또는 통지하여야 한다. ② 회사는 자료의 장애해결을 위한 보수작업, 시스템 교체작업등이 발생한 경우 일시적으로 서비스를 중단할 수 있다. ③ 회사는 다음 각 호의 1에 해당하는 경우 서비스의 제공을 중지할 수 있다. 1. 설비의 보수 등 회사의 필요에 의해 사전에 회원들에게 통지한 경우 2. 기간통신사업자가 전기통신서비스 제공을 중지하는 경우 3. 기타 불가항력적인 사유에 의해 서비스 제공이 객관적으로 불가능한 경우</div>
                <div><br/>제12조 (정보의 제공 및 광고의 게재) ① 회사는 회원에게 서비스 이용에 필요가 있다고 인정되거나 서비스 개선 및 회원대상의 서비스 소개 등의 목적으로 하는 각종 정보에 대해서 전자우편이나 서신우편을 이용한 방법으로 제공할 수 있다. ② 회사는 제공하는 서비스와 관련되는 정보 또는 광고를 서비스 화면, 홈페이지 등에 게재할 수 있으며, 회원들에게 메일을 통해 알릴 수 있다. ③ 회사는 서비스상에 게재되어 있거나 본 서비스를 통한 광고주의 판촉활동에 회원이 참여하거나 교신 또는 거래를 함으로써 발생하는 모든 손실과 손해에 대해 책임을 지지 않는다. ④ 본 서비스의 회원은 서비스 이용 시 노출되는 광고게재에 대해 동의 하는 것으로 간주한다. </div>
                <div><br/>제13조 (자료내용의 책임과 회사의 정보 관련 권한) ① 자료내용은 회원이 등록한 정보 및 사이트에 게시한 게시물을 말한다. ② 회원은 자료 내용 및 게시물을 사실에 근거하여 성실하게 작성해야 하며, 만일 자료의 내용이 사실이 아니거나 부정확하게 작성되어 발생하는 모든 책임은 회원에게 있다. ③ 모든 자료내용의 관리와 작성은 회원 본인이 하는 것이 원칙이나 사정상 위탁 또는 대행관리를 하더라도 자료내용의 책임은 회원에게 있으며 회원은 주기적으로 자신의 자료를 확인하여 항상 정확하게 관리가 되도록 노력해야 한다. ④ 회사는 회원이 등록한 자료 내용에 오자, 탈자 또는 사회적 통념에 어긋나는 문구가 있을 경우 이를 언제든지 수정할 수 있다. ⑤ 회사는 회원이 등록한 자료를 회사가 운영하는 같은 목적의 타사이트에도 게재할수 있다. </div>
                <div><br/>제14조 (게시물의 저작권 및 자료 활용) ① 게시물에 대한 권리와 책임은 게시자에게 있으며, 회사는 게시자의 동의 없이는 이를 회사가 운영하는 사이트 이외에 영리적 목적으로 사용할 수 없습니다. 단, 비영리적인 경우에는 그러하지 아니한다. ② 회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다. </div>
                <div><br/>제15조 (회사의 의무) ① 회사는 본약관에서 정한바에따라 계속적, 안정적으로 서비스를 제공 할 수 있도록 최선의 노력을 다해야 한다. ② 회사는 특별한 사정이 없는 한 회원이 서비스 이용 신청 후, 48시간 이내에 서비스를 이용할 수 있도록 한다. ③ 회사는 서비스와 관련한 회원의 의견이나 불만사항이 접수되는 경우, 그내용이 타당하다고 판단될경우 상황에 맞는 적절한 조치하여야한다. ④ 천재지변 등 예측하지 못한 일이 발생하거나 시스템의 장애가 발생하여 서비스가 중단될 경우 이에 대한 손해에 대해서는 회사가 책임을 지지 않는다. 다만 자료의 복구나 정상적인 서비스 지원이 되도록 최선을 다할 의무를 진다. ⑤ 회원이 등록한 자료로 인하여 사이트의 원활한 운영에 영향을 미친다고 판단될시, 등록된 모든자료를 회원의 사전동의 없이 삭제할수 있다. </div>
                <div><br/>제16조 (회원의 가입해지/서비스중지/자료삭제) ① 회원이 가입해지를 신청하고자 할 때는 가입시 기 입력한 메일 및 휴대폰번호 등의 내용을 전송하면 회사는 이에 따라 해지처리를 하여야한다. ② 다음의 사항에 해당하는 경우 회사는 회원의 사전 동의없이 가입해지나 서비스 중지 조치를 취할 수 있다. 1. 회원의 의무를 성실하게 이행하지 않았을 때 2. 회원명 및 연락처등 중요 기입사항이 명확하게 기입되지 않거나 허위로 등록된 경우 3. 회원 가입시 본 서비스에서 안내하는 방법으로 가입하지 않았거나 등록하지 않았을 때 4. 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우 5. 공공질서 및 미풍양속에 위반되는 내용인 경우 6. 현행법에 위배되는 내용이나 범죄적 행위에 결부된다고 인정되거나, 우려가 되는 경우 7. 저작권 또는 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우 8. 게시판의 성격에 부합하지 않는 게시물의 경우 9. 규정한 유료서비스 이용 요금을 납부하지 않았을 때 10. 본 서비스 목적에 맞지 않는 분야에 정보를 활용하여 사회적 물의가 발생하거나 발생한 우려가 있다고 판단할때 11. 회원이 등록한 정보의 내용이 사실과 다르게 조작되었거나 허위로 등록되었을 때 12. 기타 당사이이트의 명예를 훼손하는 행위를 할경우. 13. 기타 관계법규에 위배되는 내용이나, 사이트의 원활한 운영을 위하여 운영자가 필요하다고 판단한 경우. </div>
                <div><br/>제17조(신용정보의 제공 활용 동의) ① 회사가 회원가입과 관련하여 취득한 회원의 신용정보를 타인에게 제공하거나 활용하고자 할 때에는 신용정보이용및보호에관한법률 제23조의 규정에 따라 사전에 그 사유 및 해당기관 또는 업체명 등을 밝히고 해당 회원의 동의를 얻어야 한다. ② 본 서비스와 관련하여 회사가 회원으로부터 신용정보의이용및보호에관한법률에 따라 타인에게 제공 활용에 동의를 얻은 경우 회원은 회사가 신용정보 사업자 또는 신용정보 집중기관에 정보를 제공하여 회원의 신용을 판단하기 위한 자료로 활용하거나, 공공기관에서 정책자료로 활용되도록 정보를 제공하는 데 동의한 것으로 간주한다. </div>
                <div><br/>제18조 (손해배상 및 면책) ① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. ② 회사는 서비스 이용과 관련하여 가입자에게 발생한 손해 가운데 가입자의 고의, 과실 및 회원의 귀책사유로 인한 서비스 이용의 장애 및 손해에 대하여 책임을 지지 않는다. ③ 회사는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않는다. ④ 회원이 이 약관의 제17조,제18조 등의 규정에 위반한 행위로 회사 및 제3자에게 손해를 입히거나 회원의 책임 있는 사유에 의해 회사 및 제3자에게 손해를 입힌 경우에는 회원은 그 손해를 배상하여야 한다. ⑤ 회사는 이 약관의 제16조등의 규정에 위반한 행위로 이용자에게 손해가 발생한 경우 회사는 그 손해를 배상하여야 한다. </div>
                <div><br/>제19조 (분쟁의 해결) ① 회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 노력을 하여야 한다. ② 전항의 노력에도 불구하고, 분쟁에 대해 소송이 제기될 경우 회사의 주소지 관할법원으로 한다. (시행일) 이 약관은 2013년 12월 1일부터 시행한다.</div>
            </div>
        </div>
    )
}

const Modal2 = ({goBack}) => {
    return (
        <div className="modal-container" onClick={goBack}>
            <div className="modal-sticky">
                <h3>[개인 정보 처리 방침]</h3>
                <div><br/>1) 개인정보 수집.이용 - 회사는 개인정보를 수집하거나 이용하지 않습니다. 또한 제공되는 프로그램의 사용의 편리목적을 위해 기기내부에 요구없이 저장하지도 않습니다.</div>
                <div><br/>2) 개인정보 제 3자 이용 - 회사는 제 3자에게 민감한 사용자 정보나, 사용내역같은 프로그램 이용정보를 제공하지 않습니다.</div>
                <div><br/>3) 개인정보의 위탁 처리 - 회사는 기본적으로 개인정보를 수집하지 않기때문에, 다른 회사에 위탁하지 않습니다.</div>
                <div><br/>4) 이용자 개인정보 보유 : 이용기간 및 파기- 회사는 개인정보를 수집하기않기때문에 이용할수도, 파기할 어떠한 정보다 갖고있지 않습니다.</div>
                <div><br/>5) 개인정보의 기술적 / 관리적 보호대책 - 회사는 개인정보를 수집하지않기때문에, 어떠한 기술적/관리적 보호대책을 적용하지 않습니다.</div>
            </div>
        </div>
    )
}

@observer
class Signup extends React.Component{

    @observable username = ""
    @observable password = ""
    @observable checkpassword = ""
    @observable name = ""
    @observable phone = ""
    @observable email = ""
    @observable privacy = false
    @observable terms = false
    @observable duplicate = false
    @observable check_Pw = false
    @observable isModal1Clicked = false
    @observable isModal2Clicked = false
    
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    @action handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        this[name] = checked
    }
    @action duplicate_Username = () => {
        if(this.username.length>=6 && this.username.length<=11){
            axios.post("http://localhost:8000/users/duplicate/", ({
                username: this.username
            }))
            .then(res => {
                if(res.data==="username already exist"){
                    alert("이미 사용중인 아이디 입니다.")
                } else {
                    alert("사용 가능한 아이디 입니다.")
                    this.duplicate = true
                }
            })
            .catch(err => {
                console.log(err)
            })
        } else {
            alert("아이디는 6자에서 11자 사이로 입력해주시기 바랍니다.")
        }
    }
    @action check_Password = () => {
        if(this.password.length>=6 && this.password.length<=11){
            if(this.password!==this.checkpassword){
                alert("비밀번호가 일치하지 않습니다.")
            } else {
                alert("비밀번호가 일치합니다.")
                this.check_Pw = true
            }
        } else {
            alert("비밀번호는 6자에서 11자 사이로 입력해주시기 바랍니다.")
        }  
    }
    @action signUp = () => {
        if(this.duplicate===false){
            alert("아이디 중복확인을 해 주시기 바랍니다.")
        } else {
            if(this.check_Pw===false){
                alert("비밀번호 확인을 해 주시기 바랍니다.")
            } else {
                if(this.name!=="" && this.phone!=="" && this.email!=="" && this.username!=="" && this.terms===true && this.privacy===true){
                    axios.post("http://localhost:8000/users/", ({
                        username: this.username,
                        name: this.name,
                        password: this.password,
                        phone_number: this.phone,
                        email: this.email
                    }))
                    .then(res => {
                        console.log(res)
                        this.props.history.push("/")
                        window.location.reload()
                        localStorage.setItem("token", res.data["token"])
                    })
                    .catch(err => {
                        console.log(err)
                    })
                } else {
                    if(this.privacy===false){
                        alert("개인정보처리방침에 동의해주시기 바랍니다.")
                    } else if(this.terms===false){
                        alert("이용 약관에 동의해주시기 바랍니다.")
                    } else {
                        alert("입력창을 확인해주시기 바랍니다.")
                    }
                }
            }
        }
    }
    @action modalClick = (num) => {
        if(num===1){
            this.isModal1Clicked = true
        } else if(num===2){
            this.isModal2Clicked = true
        }
    }
    @action goBack = (num) => {
        if(num===1){
            this.isModal1Clicked = false
        } else if(num===2){
            this.isModal2Clicked = false
        }
    }

    render(){
        return(
            <div className="signup-container">
                <img src={Logo} alt={Logo} className="signup-logo"/>
                <div className="signup-input-container">
                    <div className="signup-input-text">회원 정보 입력</div>
                    <div className="signup-input-username-container">
                        <input onChange={this.handleChange} value={this.username} name="username" placeholder="아이디" className="signup-input-username"/>
                        <div className="signup-username-duplicate-container">
                            <div className="signup-username-duplicate" onClick={() => this.duplicate_Username()}>아이디 중복확인</div>
                        </div>
                    </div>
                    <input onChange={this.handleChange} value={this.password} name="password" type="password" placeholder="비밀번호" className="signup-input-password"/>
                    <div className="signup-input-checkpassword-container">
                        <input onChange={this.handleChange} value={this.checkpassword} name="checkpassword" type="password" placeholder="비밀번호 확인" className="signup-input-checkpassword"/>
                        <div className="signup-checkpassword-btn-container">
                            <div className="signup-checkpassword-btn" onClick={() => this.check_Password()}>비밀번호 확인</div>
                        </div>
                    </div>
                    <input onChange={this.handleChange} value={this.name} name="name" placeholder="이름" className="signup-input-name"/>
                    <input onChange={this.handleChange} value={this.phone} name="phone" placeholder="휴대전화(숫자만 입력)" className="signup-input-phone"/>
                    <input onChange={this.handleChange} value={this.email} name="email" placeholder="E - mail" className="signup-input-email"/>
                    <div className="signup-terms">약관 동의</div>
                    <div className="signup-terms-container">
                        <div className="signup-terms-container-left">
                            <input checked={this.terms} onChange={this.handleCheckboxChange} name="terms" type="checkbox" id="signup-terms-allow"/>
                            <label htmlFor="signup-terms-allow"/>
                            <span className="signup-terms-text">이용 약관 동의 (필수)</span>
                        </div>
                        <div className="signup-terms-container-right">
                            <div onClick={() => this.modalClick(1)} name="modal1" className="show-content">내용 보기</div>
                            {this.isModal1Clicked===true ? <Modal1 goBack={() => this.goBack(1)}/> : null}
                        </div>
                    </div>
                    <div className="signup-private-container">
                        <div className="signup-private-container-left">
                            <input checked={this.privacy} onChange={this.handleCheckboxChange} name="privacy" type="checkbox" id="signup-private-info"/>
                            <label htmlFor="signup-private-info"/>
                            <span className="signup-private-text">개인정보처리방침 동의 (필수)</span>
                        </div>
                        <div className="signup-private-container-right">
                            <div onClick={() => this.modalClick(2)} name="modal2" className="show-content">내용 보기</div>
                            {this.isModal2Clicked===true ? <Modal2 goBack={() => this.goBack(2)}/> : null}
                        </div>
                    </div>
                    <div className="signup-btn" onClick={() => this.signUp()}>회원 가입</div>
                </div>
            </div>
        )  
    }
}

export default Signup