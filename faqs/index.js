'use strict';

const faqContainer = document.querySelector('.faq-container');
const dataArray = [
  {
    title: 'Why is javascript so cool?',
    detail:
      'eprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, ',
  },
  {
    title: 'Why is javascript so cool?',
    detail:
      'eprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, ',
  },
  {
    title: 'Why is GO language so cool?',
    detail:
      'eprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, ',
  },
  {
    title: 'Do you have  issue learning JS?',
    detail:
      'eprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, fuga fugit deserunt ullam dolorum! Quos hic et quam asperiores, vitae reprehenderit laboriosam saepe illo. reprehenderit laboriosam saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, ',
  },
];

const makeHtml = (data) => {
  return `<details>
  <summary>${data.title}</summary>
  <p>${data.detail}</p>
  </details>`;
};

const genarateFaq = () => {
  return dataArray.map((data) => makeHtml(data)).join('');
};

faqContainer.innerHTML = genarateFaq();
const allDetails = Array.from(document.getElementsByTagName('details'));
allDetails[0].setAttribute('open', true);
const removeAttr = () =>
  allDetails.forEach((detail) => detail.removeAttribute('open'));
allDetails.forEach((detail) => {
  detail.addEventListener('click', (event) => {
    const target = event.target.parentElement;
    removeAttr();
    console.log(target);
  });
});
