function soalNomorDelapan(num) {
  for (let i = 1; i <= 15; i++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('EduWork');
    } else if (num % 3 === 0) {
      console.log('Edu');
    } else if (num % 5 === 0) {
      console.log('Work');
    } else {
      console.log(num);
    }
  }
}

soalNomorDelapan(1);
soalNomorDelapan(2);
soalNomorDelapan(3);
soalNomorDelapan(4);
soalNomorDelapan(5);
soalNomorDelapan(6);
soalNomorDelapan(7);
soalNomorDelapan(8);
soalNomorDelapan(9);
soalNomorDelapan(10);
soalNomorDelapan(11);
soalNomorDelapan(12);
soalNomorDelapan(13);
soalNomorDelapan(14);
soalNomorDelapan(15);
