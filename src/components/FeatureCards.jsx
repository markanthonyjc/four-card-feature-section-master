import Card from '../UI/Card.jsx'
import { IconCalculator, IconKarma, IconSupervisor, IconTeamBuilder } from '../assets/images'
import style from './FeatureCards.module.scss'

const FeatureCards = () => {
  return <section className={style['feature-cards']}>
    <div>
      <Card title={'Supervisor'}
            description={'Monitors activity to identity project roadblocks'}
            icon={IconSupervisor}
            modifier={'supervisor'}
      />
    </div>
    <div>
      <Card title={'Team Builder'}
            description={'Scans out talent network to create the optimal team for your project'}
            icon={IconTeamBuilder}
            modifier={'team-builder'}
      />
      <Card title={'Karma'}
            description={'Regularly evaluates out talent to ensure quality'}
            icon={IconKarma}
            modifier={'karma'}
      />
    </div>
    <div>
      <Card title={'Calculator'}
            description={'Uses data from past projects to provider better delivery estimates'}
            icon={IconCalculator}
            modifier={'calculator'}
      />
    </div>
  </section>
}

export default FeatureCards
