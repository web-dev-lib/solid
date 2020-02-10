import { IQuiz } from '../IQuiz'

export const srpPatterns4: IQuiz = {
  name: 'srp-patterns-4',
  question: 'За счёт чего фасад позволяет упростить взаимодействие между сущностями?',
  variants: [
    {
      text:
        'Он скрывает за собой сложную инициализацию экземпляров класса или сложную последовательность вызова методов'
    },
    {
      text: 'Позволяет называть разные методы разных классов одинаковым именем, чтобы унифицировать вызов',
      description:
        'Это не основное его назначение. Кроме того иногда фасад скрывает методы только одного класса, например, при вызове длинной цепочки из нескольких методов'
    },
    {
      text: 'Замещает метод одного другого класса своим, давая вызывать его по другому имени',
      description: 'Может скрывать за собой методы нескольких классов тоже'
    }
  ],
  meta: {
    correctAnswers: [0]
  }
}
