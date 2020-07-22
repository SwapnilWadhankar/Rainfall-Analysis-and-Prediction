<?php
                            
                            $query = "SELECT * FROM europe";
                            $store_result = Array();
                            $countries_europe = mysqli_query($conn,$query);
                            while($row = mysqli_fetch_assoc($countries_europe))
                            {
                            $store_result[] = $row['Countries'];
                            }
                            echo '<div class="row">';
                            for ($i = 0; $i < count($store_result); $i++) {
                                echo '<div class="col-md-3"><a href="#">'.$store_result[$i] .'</a></div>';
                                if (($i+1) % 4 == 0)
                                    echo '</div><div class="row">';
                            }   
                            echo '</div>';
                          
                            ?>