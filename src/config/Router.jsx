import React from 'react';
import { Dynamic } from 'framework';
import { HashRouter, Switch, Route } from "react-router-dom";
import Menu from "../components/Menu"
import LeaderBoardMenu from "../components/LeaderBoardMenu"


// define models which is common across all modules here
const stdmodels = [
  //   import('models/profile')
]

export default function Router({ Viewer }) {
  const Home = Dynamic({
    name: 'Home',
    src: () => import('components/Home'),
    models: () => [
      ...stdmodels,
    ]
  })
  const Counter = Dynamic({
    name: 'Counter',
    src: () => import('components/Counter'),                        // componment state basic version
    //     src: () => import('components/Counter/redux-version'),          // redux version
    //     src: () => import('components/Counter/typescript-version.tsx'), // typescript version
    models: () => [
      ...stdmodels,
      import('models/counter'),
    ]
  })
  const LoremIpsum = Dynamic({
    name: 'LoremIpsum',
    src: () => import('components/LoremIpsum'),
    models: () => [
      ...stdmodels,
    ]
  })
  const Someone = Dynamic({
    name: 'LoremIpsum',
    src: () => import('components/Someone'),
    models: () => [
      ...stdmodels,
      import('models/someone'),
    ]
  })
  const NotFoundPage = Dynamic({
    src: () => import('components/PageNotFound'),
    models: () => [
      ...stdmodels,
    ]
  })
  const ContentPage = Dynamic({
    src: () => import('components/ContentPage'),
    models: () => [
      ...stdmodels,
      import('models/article'),
    ]
  })
  const QuestionEnd = Dynamic({
    src: () => import('components/ContentPage/questionEnd'),
    models: () => [
      ...stdmodels,
    ]
  })
  const LeaderBoard = Dynamic({
    src: () => import('components/LeaderBoard'),
    models: () => [
      ...stdmodels,
    ]
  })
  const Statistics = Dynamic({
    src: () => import('components/Statistics'),
    models: () => [
      ...stdmodels,
    ]
  })

  return (
    <HashRouter>
      <Viewer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/content-page" render={(props) =>
            <div>
              <Menu {...props} />
              <ContentPage {...props} />
            </div>
          } />
          <Route exact path="/counter" render={() => <Counter start={42} />} />
          <Route exact path="/someone" component={Someone} />
          <Route exact path="/lorem-ipsum" component={LoremIpsum} />
          <Route exact path="/question-end" component={QuestionEnd} />
          <Route exact path="/leader-board" render={(props) =>
            <div>
              <LeaderBoardMenu {...props} />
              <LeaderBoard {...props} />
            </div>
          } />
          <Route exact path="/statistics" render={(props) =>
            <div>
              <LeaderBoardMenu {...props} />
              <Statistics />
            </div>
          } />
          <Route component={NotFoundPage} />
        </Switch>
      </Viewer>
    </HashRouter>
  );

  //         <Route path="/settings/:cat" component={Settings}  />
}

