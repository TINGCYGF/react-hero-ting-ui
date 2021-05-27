import React from "react";
import './style.scss'
import {Route, Switch } from "react-router-dom";
import {ButtonDoc} from "../../DocLib/BurronDoc/ButtonDoc";
import {MenuDoc} from "../../DocLib/MenuDoc/MenuDoc";
import {InputDoc} from "../../DocLib/InputDoc/InputDoc";
import {UploadDoc} from "../../DocLib/UploadDoc/UploadDoc";
import {ProgressDoc} from "../../DocLib/Progress/ProgressDoc";

const Main = () => {
  return (
    <div className="main-doc">
      <Switch>
        <Route path="/doc/button" component={ButtonDoc} />
        <Route path="/doc/menu" component={MenuDoc} />
        <Route path="/doc/input" component={InputDoc} />
        <Route path="/doc/upload" component={UploadDoc} />
        <Route path="/doc/progress" component={ProgressDoc} />
      </Switch>
    </div>
  )
}

export {Main}