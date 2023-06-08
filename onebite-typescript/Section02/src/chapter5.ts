enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = 'ko',
  english = 'en'
}

const user1 = {
  name: '이정환',
  // role: 0  // 0 <- 관리자
  role: Role.ADMIN,
  lang: Language.english,
}

const user2 = {
  name: '홍길동',
  // role: 1  // 1 <- 일반유저
  role: Role.USER,
  lang: Language.korean,
}

const user3 = {
  name: '아무개',
  // role: 2   // 2 <- 게스트
  role: Role.GUEST,
  lang: Language.korean,
}