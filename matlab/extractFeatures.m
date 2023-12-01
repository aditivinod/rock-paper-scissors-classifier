%this function talkes in filtered data and returns several features.

function [feature_table] = extractFeatures(dataChTimeTr,includedFeatures, Fs)
    
    % List of channels to include (can change to only use some)
    includedChannels = 1:size(dataChTimeTr,2);
    
    % Empty feature table
    feature_table = table();

    
    for f = 1:length(includedFeatures)

        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        % Calcuate feature values for 
        % fvalues should have rows = number of trials
        % usually fvales will have coluns = number of channels (but not if
        % it is some comparison between channels)
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

        % Check the name of each feature and hop down to that part of the
        % code ("case" is like... in the case that it is this thing.. do
        % this code)
        switch includedFeatures{f}

            % Variance  
            % variance represents the average squared deviation of the
            % signal from the mean. In this case, the signal is all of the
            % timepoints for a single channel and trial.
            %(fvalues = trials x channels)
            case 'var'
                fvalues = var(dataChTimeTr,0,1);

            Zero Crossings
            case 'zeroCrossing'
                    [~, tempVar] = zerocrossrate(dataChTimeTr(:,:));
                    fvalues = tempVar - 0.5;

            %Waveform Length    
            case 'waveformLength'
                    fvalues = zeros(1, 4);
                    for j = 1:size(dataChTimeTr, 1)-1
                        fvalues = fvalues + abs(dataChTimeTr(j,:) - dataChTimeTr(j + 1, :));
                    end

            %Mean absolute Value
            case 'mav'
                    fvalues = sum(abs(dataChTimeTr(:,:)), 1) / size(dataChTimeTr, 1);

            %Root Mean Square
            case 'rms'
                    fvalues = rms(dataChTimeTr(:,:));

            %Simple Absolute Value
            case 'abs'
                    fvalues = sum(abs(dataChTimeTr(:,:)), 1) * 1 + (rand() - 0.5)/20;

            %Slope Sign Change
            case 'ssc'
                differences = diff(dataChTimeTr, 1, 1);
                fvalues = sum(differences(1:end-1, :) .* differences(2:end, :) < 0, 1);


            otherwise
                % If you don't recognize the feature name in the cases
                % above
                disp(strcat('unknown feature: ', includedFeatures{f},', skipping....'))
                break % This breaks out of this round of the for loop, skipping the code below that's in the loop so you don't include this unknown feature
        end

        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        % Put feature values (fvalues) into a table with appropriate names
        % fvalues should have rows = number of trials
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        
        % If there is only one feature, just name it the feature name
        if size(fvalues,2) == 1
            feature_table = [feature_table table(fvalues,...
                'VariableNames',string(strcat(includedFeatures{f})))];
        
        % If the number of features matches the number of included
        % channels, then assume each column is a channel
        elseif size(fvalues,2) == length(includedChannels)
            %Put data into a table with the feature name and channel number
            for  ch = includedChannels
                feature_table = [feature_table table(fvalues(:,ch),...
                    'VariableNames',string(strcat(includedFeatures{f}, '_' ,'Ch',num2str(ch))))]; %#ok<AGROW>
            end
        
        
        else
        % Otherwise, loop through each one and give a number name 
            for  v = 1:size(fvalues,2)
                feature_table = [feature_table table(fvalues(:,v),...
                    'VariableNames',string(strcat(includedFeatures{f}, '_' ,'val',num2str(v))))]; %#ok<AGROW>
            end
        end
    end
end