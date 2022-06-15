import { Injectable } from '@angular/core'
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { StatusService } from '../services/statusService/status.service';
import * as actions from '../actions/status.action';


@Injectable()
export class ItemEffects {
    constructor(
        private actions$: Actions,
        private statusService: StatusService,
    ) { }

    getStatus = createEffect(() => this.actions$.pipe(
        ofType(actions.getStatusRequest),
        mergeMap(() => this.statusService.getStatus()),
        map(payload => actions.getStatusSuccess({payload})),
        catchError(error => of(actions.getStatusFailure({error})))
    ))

}