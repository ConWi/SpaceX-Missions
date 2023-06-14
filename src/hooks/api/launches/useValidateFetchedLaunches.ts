import {IValidateFetchedLaunches} from '../../../types/launches/validation';
import {ILaunch} from '../../../types/launch/launch';

export const useValidateFetchedLaunches = (errorMessage: string, launchList?: ILaunch[]): IValidateFetchedLaunches => {
    let isValidLaunches = false;
    if (errorMessage !== '') {
        return {isValidLaunches: isValidLaunches, validationErrorMessage: `ERROR: ${errorMessage}`}
    }

    if (isEmptyLaunchList(launchList)) {
        return {isValidLaunches: isValidLaunches, validationErrorMessage: 'Data was null'}
    }

    return {isValidLaunches: true, validationErrorMessage: null};
}

const isEmptyLaunchList = (launchList?: ILaunch[]) => {
    return !launchList || launchList.length === 0
}