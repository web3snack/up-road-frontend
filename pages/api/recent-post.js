export default function handler(req, res) {
  res.status(200).json([
    {
      title: 'Title 1',
      desc: 'Description 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...',
      writerName: 'User1',
      writerImageUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Title 2',
      desc: 'Description 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...',
      writerName: 'User1',
      writerImageUrl: 'https://picsum.photos/200',
    },
  ]);
}
