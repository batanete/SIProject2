$(document).ready(function(){
        $(".delete").hide();
        $(".create").show();
        $(".professor").hide();
        $(".student").hide();
        $(".list_students").hide();
        $(".list_materials_course").hide();
        $(".remove_material").hide();
        $(".change_course_name").hide();
        $(".upload_material").hide();
        $(".edit").hide();
        $('.del').on('click', function(){
            $(".create").hide();
            $(".edit").hide();
            $(".list_students").hide();
            $(".cre").removeClass("activeUsers");
            $(".list").removeClass("activeUsers");
            $(".ed").removeClass("activeUsers");
            $(".remove").removeClass("activeUsers");
            $(".upload").removeClass("activeUsers");
            $(this).addClass("activeUsers");
            $(".delete").show();
        });
        $('.cre').on('click', function(){
            $(".delete").hide();
            $(".edit").hide();
            $(".list_materials_course").hide();
            $(".list_students").hide();
            $(".create").show();
            $(".ed").removeClass("activeUsers");
            $(".del").removeClass("activeUsers");
            $(".list").removeClass("activeUsers");
            $(".remove").removeClass("activeUsers");
            $(this).addClass("activeUsers");
        });
        $('.list').on('click', function(){
            $(".delete").hide();
            $(".edit").hide();
            $(".list_materials_course").hide();
            $(".create").hide();
            $(".list_students").show();
            $(".ed").removeClass("activeUsers");
            $(".del").removeClass("activeUsers");
            $(".cre").removeClass("activeUsers");
            $(".remove").removeClass("activeUsers");
            $(this).addClass("activeUsers");
        });
        $('.ed').on('click', function(){
            $(".delete").hide();
            $(".create").hide();
            $(".edit").show();
            $(".list_students").hide();
            $(".del").removeClass("activeUsers");
            $(".cre").removeClass("activeUsers");
            $(".remove").removeClass("activeUsers");
            $(".list").removeClass("activeUsers");
            $(this).addClass("activeUsers");
        });    
        $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'add_stu') {
            $(".add_student").show();
            $(".add_professor").hide();  
            $(".remove_professor").hide(); 
            $(".change_course_name").hide(); 
            $(".remove_student").hide();  
            $(".remove_course").hide(); 
            $("#createUserBtn").addClass("createuser");
            $("#createuserdiv").addClass("createuser");
       }
       else if($(this).attr('id') == 'add_prof'){
        $(".add_professor").show();
            $(".add_student").hide();
            $(".remove_professor").hide(); 
            $(".change_course_name").hide();
            $(".remove_course").hide();
            $(".remove_student").hide();   
            $("#createUserBtn").addClass("createuser");
            $("#createuserdiv").addClass("createuser");
       }
       else if($(this).attr('id') == 'remove_stu'){
            $(".remove_student").show();
            $(".remove_professor").hide();
            $(".change_course_name").hide();
            $(".add_student").hide();  
            $(".remove_course").hide();
            $(".add_professor").hide();  
            $("#createUserBtn").addClass("createuser");
            $("#createuserdiv").addClass("createuser");
       }
       else if($(this).attr('id') == 'remove_prof'){
        $(".remove_student").hide();
        $(".add_student").hide();  
        $(".add_professor").hide(); 
        $(".change_course_name").hide();
        $(".remove_course").hide();
        $(".remove_professor").show(); 
        $("#createuserdiv").removeClass("createuser");
        $("#createUserBtn").removeClass("createuser");
        $("#createUserBtn").removeClass("createuserright");
        $("#createUserBtn").addClass("createuseralgnleft");
        $("#createUserBtn").addClass("createuseralgnleft");
       }
       else if($(this).attr('id') == 'remove_cours'){
          $(".remove_student").hide();
          $(".change_course_name").hide();
          $(".add_student").hide();  
          $(".add_professor").hide();
          $(".remove_course").show();
          $(".remove_professor").hide(); 
          $("#createuserdiv").removeClass("createuser");
          $("#createUserBtn").removeClass("createuser");
          $("#createUserBtn").removeClass("createuserright");
          $("#createUserBtn").addClass("createuseralgnleft");
          $("#createUserBtn").addClass("createuseralgnleft");
       }
       else{
        $(".remove_student").hide();
          $(".add_student").hide();  
          $(".add_professor").hide(); 
          $(".remove_course").hide();
          $(".remove_professor").hide(); 
          $(".change_course_name").show();
          $("#createuserdiv").removeClass("createuser");
          $("#createUserBtn").removeClass("createuser");
          $("#createUserBtn").removeClass("createuserright");
          $("#createUserBtn").addClass("createuseralgnleft");
          $("#createUserBtn").addClass("createuseralgnleft");

       }
     });
  });