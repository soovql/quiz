import React from 'react';

type Props = {
  score: number;
}

const QuestionCard: React.FC<Props> = (
  {
    score
  }
) => (
    <div>
      <div className={'yayayaya'}>
        поздравляем
      </div>
      <div className={'yayayaya'}>
        ваш счет {score}
      </div>
    </div>
  );

export default QuestionCard;
