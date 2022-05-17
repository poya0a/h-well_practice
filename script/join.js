(function($){

    var hWell={
      init:function(){
        this.header();
        this.main();
        this.footer();
      },

      header:function(){},

      main:function(){
        
        //사업장 관리 번호
        $('#firmMgmtNo').on({
          keyup:function(e){
            e.preventDefault();
            $(this).val($(this).val().toString().replace(/([^0-9]*)/g,''));
          }
        });

        $('.firm-mgmt-no-btn').on({
          click:function(e){
              e.preventDefault();
    
              var regExp=/^((?=.*[0-9])+)[^\s][0-9]{10,11}$/g;
              var firmMgmtNoValue=$('#firmMgmtNo').val().toString();
          
                if(firmMgmtNoValue===''){ 
                  alert('사업장관리번호를 입력하세요.');
                }
                else{ 
                  if(regExp.test(firmMgmtNoValue)===true) {
                    $('.guide-firm-mgmt').addClass('on');
                    $('.guide-firm-mgmt p').addClass('success');
                    $('.guide-firm-mgmt p').show().text('유효한 사업장관리번호 입니다.');
                    $('#firmSym').val(firmMgmtNoValue);
                  }
                  else if(regExp.test(firmMgmtNoValue)===false) {
                    $('.guide-firm-mgmt').addClass('on');
                    $('.guide-firm-mgmt p').removeClass('success');
                    $('.guide-firm-mgmt p').show().text('사업장관리번호가 유효하지 않거나 탈퇴한 사업장 입니다. 고지서에서 사업장관리번호를 확인하시기 바랍니다.');
                    alert('사업장관리번호를 올바르게 입력하세요.');
                  }
                }}
         });

        //사업장 기호

        //단위 사업장 기호
        $('.unitFirmSym').on({
          click:function(e){
            e.preventDefault();

            var firmMgmtNoValue=$('#firmMgmtNo').val().toString();

            if(firmMgmtNoValue===''){
              alert('사업장 관리번호를 입력하세요!')
            }
          }
        });

        $('.unit-firm-btn').on({
          click:function(e){
            e.preventDefault();

            var firmMgmtNoValue=$('#firmMgmtNo').val().toString();

            if(firmMgmtNoValue===''){
              alert('사업장 관리번호를 입력하세요!')
            }
          }
        });

        //아이디
        $('#inputId').on({
          keyup:function(e){
            e.preventDefault();

            var regExp=/^((?=.*[a-z])+(?=.*[0-9])+)[^\s][a-z0-9]{6,10}$/g;
            var idValue=$(this).val().toString();
            var firmMgmtNoValue=$('#firmMgmtNo').val().toString();

            if(firmMgmtNoValue===''){
              alert('사업장관리번호확인 버튼을 클릭하여 사업장관리번호 검증을 수행하십시오.')
            }
            else{
              if(regExp.test(idValue)===true){
                $('.guide-id').addClass('on');
                $('.guide-id p').addClass('success');
                $('.guide-id p').show().text('사용할 수 있는 아이디입니다.');
              }
              else if(regExp.test(idValue)===false){
                $('.guide-id').addClass('on');
                $('.guide-id p').removeClass('success');
                $('.guide-id p').show().text('영문 소문자와 숫자만 사용 가능합니다.');
              }
            }
          }
        });
    
        $('.input-id-btn').on({
         click:function(){
         
           var regExp=/^((?=.*[a-z])+(?=.*[0-9])+)[^\s][a-z0-9]{6,10}$/g;
           var idValue=$('#inputId').val().toString();
         
               if(idValue===''){
                   alert('아이디를 입력하세요.');
               }
               else{
                 if(regExp.test(idValue)===false){
                   alert('아이디란에 허용할 수 없는 문자가 입력되었습니다.\n\n영문 소문자와 숫자의 조합만 가능합니다.');
               }}
        }});
      
         //비밀번호
         $('#inputPw').on({
           keyup:function(e){
             e.preventDefault();
      
             var regExp=/^(((?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[!@#$])+)+)[^\s][A-Za-z0-9!@#$]{9,12}/;
             var pwValue=$(this).val().toString();
             var firmMgmtNoValue=$('#firmMgmtNo').val().toString();

             if(firmMgmtNoValue===''){
              alert('사업장관리번호확인 버튼을 클릭하여 사업장관리번호 검증을 수행하십시오.')
            }
             else{
               if(regExp.test(pwValue)===true){
                $('.guide-pw').addClass('on');
                $('.guide-pw p').addClass('success');
                $('.guide-pw p').show().text('사용할 수 있는 비밀번호입니다.');
               }
               else if(regExp.test(pwValue)===false){
                $('.guide-pw').addClass('on');
                $('.guide-pw p').removeClass('success');
                $('.guide-pw p').show().text('영문과 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내로 입력하세요.');
               }}
         }});

        //비밀번호 확인
        $('#inputPwConfirm').on({
          keyup:function(e){
            e.preventDefault();

            var pwValue=$('#inputPw').val().toString();
            var PwConfirmValue=$(this).val().toString();

            if(PwConfirmValue===pwValue){
              $('.guide-pw-confirm').addClass('on');
              $('.guide-pw-confirm p').addClass('success');
              $('.guide-pw-confirm p').show().text('비밀번호가 일치합니다.');
            }
            else{
              $('.guide-pw-confirm').addClass('on');
              $('.guide-pw-confirm p').removeClass('success');
              $('.guide-pw-confirm p').show().text('입력하신 비밀번호가 일치하지 않습니다. 다시 확인하신 후 입력해 주세요.');
            }
          }
        });

        //비밀번호 분실 시 확인 질문
        $('#pwQ').change(function(){

          $("#pwQ option:selected").each(function(){

              if($(this).val()=="14"){
                $("#pwASelected").addClass('on')
              }
              else{
                $("#pwASelected").removeClass('on')
              }
           })
        });

        //비밀번호 분실 시 확인 답변
        
        //전화번호
        $('#phone').on({
          keyup:function(e){
            e.preventDefault();
            
            var regExp=/^01[0|6|7|8|9]+\d{3,4}\d{4}$/;
            var PhoneValue=$(this).val().toString();
            var firmMgmtNoValue=$('#firmMgmtNo').val().toString();
            $(this).val($(this).val().toString().replace(/([^0-9]*)/g,''));

            if(firmMgmtNoValue===''){
              alert('사업장관리번호확인 버튼을 클릭하여 사업장관리번호 검증을 수행하십시오.')
            }
            else{
              if(regExp.test(PhoneValue)===false){
                $('.guide-phone').addClass('on');
                $('.guide-phone p').removeClass('success');
                $('.guide-phone p').show().text('올바른 전화번호 형식이 아닙니다. 다시 확인하신 후 입력해 주세요.');
              }
              else if(regExp.test(PhoneValue)===true){
                $('.guide-phone').removeClass('on');
              }
            }
          }
        });

        //팩스번호
        $('#fax').on({
          keyup:function(e){
            e.preventDefault();
            
            var regExp=/^((?=.*[0-9])+)[^\s][0-9]{10,11}$/g;
            var firmMgmtNoValue=$('#firmMgmtNo').val().toString();
            $(this).val($(this).val().toString().replace(/([^0-9]*)/g,''));

            if(firmMgmtNoValue===''){
              alert('사업장관리번호확인 버튼을 클릭하여 사업장관리번호 검증을 수행하십시오.')
            }
          }
        });

        //업무 담당자명

        //이메일
        $('#email').on({
          keyup:function(){
            $(this).val($(this).val().toString().replace(/([^A-Za-z0-9!\@\#\$\%\^\&\*\,\.]*)/g,''));
        }});

        $('#emailDomain').on({
          keyup:function(){
            $(this).val($(this).val().toString().replace(/([^A-Za-z0-9!\@\#\$\%\^\&\*\,\.]*)/g,''));

            var regExpEmail=/^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

        }});

        $('#emailDomainSelect').change(function(){

          $("#emailDomainSelect option:selected").each(function(){

              if($(this).val()=="inputEmail"){
                $("#emailDomain").val('');
                $("#emailDomain").attr("disabled",false);
              }
              else{
                $("#emailDomain").val($(this).val());
                $("#emailDomain").attr("disabled",true);
              }
           })
        });

        //홈페이지 주소
        $('#homepageUrl').on({
          keyup:function(){

            var regExp=/^((?=.*[A-Za-z])+(?=.*[0-9])*(?=.*[\&\=\.\/\#\?\-\_])*)[^\s][A-Za-z0-9\&\=\.\/\#\?\-\_]{,60}$/g;
            $(this).val($(this).val().toString().replace(/([^A-Za-z0-9\&\=\.\/\#\?\-\_]*)/g,''));
          }
        });

        //소식지 수신 여부

        //회원가입 확인 및 취소 버튼

        // 모달창 여닫기
        $('.firm-mgmt-txt').on({
          click:function(){
            $('#modal').addClass('on');
            $("body").css("overflow", "hidden");
          }
        });
    
        $('.modal-close-btn').on({
          click:function(){
            $('#modal').removeClass('on');
            $("body").css("overflow", "auto");
          }
        });

      },
      
      footer:function(){}
    }

    hWell.init();

  })(jQuery);