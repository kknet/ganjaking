<?php
namespace WeDevs\PM_Pro\Modules\time_tracker\src\Validators;

use WeDevs\PM_Pro\Core\Validator\Abstract_Validator;

Class Time_Tracker_Validator extends Abstract_Validator {

    public function messages() {
        return [
            'title.pm_pro_required' => 'Title field is required.',
        ];
    }
    public function rules() {
        return [
            'title' => 'pm_pro_required',
        ];
    }
}