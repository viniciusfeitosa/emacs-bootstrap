$(function () {

    $('.logo-icon').each(function() {
        $this = $(this);

        $this.on('click', function() {
            var checkBox = $("input[value="+ $(this).data('value') +"]");
            checkBox.prop("checked", !checkBox.prop("checked"));

            if (checkBox.prop("checked")) {
				if ($(this).data("type") == "radio"){
					$(".logo-icon[data-type="+ $(this).data('type') +"]").removeClass('selected');
				}
				$(this).addClass('selected');
            } else {
				if ($(this).data("type") == "checkbox"){
					$(this).removeClass('selected');
				} else {
					$(".logo-icon[data-type="+ $(this).data('type') +"]").removeClass('selected');
				}
            };
        });
    });

    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {
            updateDisplay();
        }
        init();
    });
});
