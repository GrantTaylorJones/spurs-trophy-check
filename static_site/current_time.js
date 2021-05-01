<script>
      function startTime() {
          var today=new Date();
          var day = today.getDate();
          var month = today.getMonth();
          var year = today.getFullYear();
          var h=today.getHours();
          var m=today.getMinutes();
          var s=today.getSeconds();
          m = checkTime(m);
          s = checkTime(s);
          document.getElementById('txt').innerHTML = "Date: " + day + "/" + month + "/" + year + " " + "Clock: " + h+":"+m+":"+s;
          document.getElementById('seconds').innerHTML = s;
          var t = setTimeout(function(){startTime()},500);

      }

      function checkTime(i) {
          if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
          return i;
      }

</script>
