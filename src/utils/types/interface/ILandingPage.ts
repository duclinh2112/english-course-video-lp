interface IBanner {
  title: string
  content: string
  image: {
    src: string
    alt: string
  }
}

interface IProblem {
  title: string
  data: {
    title: string
    content: string
    image: string
  }[]
}

interface IWcu {
  title: string
  data: string[]
}

interface IPackage {
  title: string
  data: {
    name: string
    price: string
    content: string[]
  }[]
}

interface IFeedback {
  title: string
  data: {
    content: string
    info: string
  }[]
}

interface IFaq {
  title: string
  data: {
    question: string
    answer: string
  }[]
}

export type { IBanner, IFaq, IFeedback, IPackage, IProblem, IWcu }
